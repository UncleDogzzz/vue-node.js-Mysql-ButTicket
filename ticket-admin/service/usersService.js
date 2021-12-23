const userDao=require('../dao/userDao.js')
const encryption=require('../lib/encryption.js')
const Sequelize=require('sequelize');
const Op=Sequelize.Op;
module.exports={
	changePassword:async(id,password)=>{
		let user=await userDao.getUserById(id);          //新密码加盐
		var newPassword=await encryption.getMd5Pass(password,user.salt);
		console.log(newPassword);
		let result=await userDao.changePassword(id,newPassword);
		return result;
	},
	searchUserByInfo:async(searchInfo)=>{
		const likeQuery=['account'];
		for(let key in searchInfo){
			if(searchInfo[key]===''||searchInfo[key]===undefined)
			{
				delete searchInfo[key];
			}else{
				if(likeQuery.includes(key)){
					searchInfo[key]={
						[Op.like]:`%${searchInfo[key]}%`
					};
				}
			}
		}
		let searchResult=await userDao.getUsersBySearchInfo(searchInfo);
		return searchResult;
	}
	}
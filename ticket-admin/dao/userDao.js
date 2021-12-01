
																		
const{user,home,cinemas,customer}=require('../model/index.js')
module.exports={
	getUserByAccount:async(account)=>{
		try{
		let result=await user.findOne({
			where:{
				account
			}
		})
		return result;
		}catch(error){
			console.log('查找错误'+error);
		}
	},
	addUser:async(data)=>{
		try{
			let result=await user.create(data);
			return result;
		}catch(error){
			console.log('新增用户错误:'+error);
			return null
		}
	},
	
	
	
	
	getCinemaSeat:async(cinemaid,moviceid)=>{
		console.log(cinemaid);
		console.log(cinemas)
		let res=await cinemas.findOne({
			where:{
				cinemaid
			}
		});
		return res;
	},
	CreateCusInfo:async(data)=>{
		let result=await customer.create(data);
		return result;
	},
	UpdateSeat:async(id,seat)=>{
		let result=await cinemas.update({seat},{where: {id},});
	},
	getUserinfo:async(username)=>{
		let res=await customer.findAll({
			where:{username},
			attributes:['cinemaid','moviceid','seat','price','time'],
		})
		return res;
	}
}
// const users =new Map([['tom','123456'],['jack','654321']])
const userDao=require('../dao/userDao.js')


module.exports={	
	checkLogin:async(account,password)=>{					//service交给userDao查询数据
		//let unserDataPs= await userDao.findUserByPhone(phone);  //返回数据库中的数据 数组形式  注意用await 等待promise完成才能有返回值
		let unserDataPs= await userDao.getUserByAccount(account);
		if(unserDataPs){
			if(unserDataPs.password==password)
			{	
				return unserDataPs;
				}
			}
			return null;
		},
		addUser:async(userInfo)=>{
			if(userInfo.account&&userInfo.password){
				let user=await userDao.getUserByAccount(userInfo.account);
				if(!user){
					console.log(userInfo)	
					let result=await userDao.addUser(userInfo);
					if(result){
						return {success:"1",info:'新增用户成功'}
					}else{
						return {success:"0",info:'新增用户失败'}
					}
				}else{
					return {success:"0",info:'该账号已存在!'}
				}
			}
			return {success:"0",info:'提交信息有误'};
		}
	}
	

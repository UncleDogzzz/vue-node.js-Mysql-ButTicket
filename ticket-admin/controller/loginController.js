// const indexService=require('../service/indexService.js')
// const passport=require('../middleware/passport.js')
// var fs = require('fs');
// var stack=[]
// var searchUserData={
// 	'roles':[{'id':1,'rolename':'管理员'},{'id':2,'rolename':'老师'},{'id':3,'rolename':'学生'}]
// }
const loginService=require('../service/loginService.js')
const userDao=require('../dao/userDao.js')
const encryption=require('../lib/encryption.js')
module.exports={
	loginGetToken:async(ctx,next)=>{
		// ctx.set('Access-Control-Allow-Origin', '*')
		ctx.response.status=200;
		var {account,password}=ctx.request.body;
		 console.log(ctx.request.body);
		console.log(account);
		console.log(password);
		let res=await loginService.checkLogin(account,password);
		console.log(res);
		if(res){
			let payload={userid:res.id};
			let token=encryption.getUserToken(payload);
			if(token){
				console.log(token);
				ctx.body={"status":200,"success":"1",
				'data':{
					token:'Bearer '+token
				}};
			}
			else{
				ctx.body='{"status":200,"success":"0","info":"获取token失败"}';
			}
			
			
		
		}else{
			ctx.body='{"status":200,"success":"0","info":"账号或密码错误"}';
		}
			console.log(ctx.request.query)  //获取参数
		console.log(ctx.response)
		console.log(account)
	},
	addUser:async(ctx,next)=>{
		console.log(123);

		ctx.response.status=200;
		var {account,password}=ctx.request.body;
		console.log(account);
		console.log(password);
		let res=await loginService.addUser(ctx.request.body);
		ctx.response.body=res
	},
	getUserInfo:async(ctx,next)=>{
		// ctx.body='1'
		console.log(12333333333333333333333333)
		console.log(ctx.params.id);
		let res=await userDao.getUserById(ctx.params.id);
		console.log(res);
		if(res){
			ctx.body={success:true,data:res};
		}else{
			ctx.body={success:false,data:'获取用户失败'};
		}
		
	},
	
	
	
	
	
	getCinemaSeat:async(ctx,next)=>{
		ctx.set('Access-Control-Allow-Origin', '*');
		ctx.response.status=200;
		var {cinemaid,moviceid}=ctx.request.query;
		console.log(cinemaid);
		console.log(moviceid);
		let res=await userDao.getCinemaSeat(cinemaid,1);
		console.log(res);
		ctx.body= JSON.parse(res.dataValues.seat)
	},
	CreateCusInfo:async(ctx,next)=>{
		ctx.set('Access-Control-Allow-Origin', '*');
		ctx.response.status=200;
		var {cinemaid,moviceid,time,seat,username}=ctx.request.query;
		console.log(cinemaid);
		console.log(moviceid);
		let res=await userDao.CreateCusInfo(ctx.request.query);
		console.log(res)
		
		let res111=await userDao.getCinemaSeat(cinemaid,1);
		var Newseat= JSON.parse(res111.dataValues.seat)
		Newseat.isKong[seat-1]=0
		Newseat=JSON.stringify(Newseat);
		await userDao.UpdateSeat(1,Newseat);
		
		
		ctx.body=res;
	},
	UpdateSeat:async(ctx,next)=>{
		ctx.set('Access-Control-Allow-Origin', '*');
		ctx.response.status=200;
		var {id,seat}=ctx.request.query;
		console.log(id);
		console.log(seat);
		let res=await userDao.UpdateSeat(id,seat);
		console.log(res)
		ctx.body=res;
	}
	// getUserinfo:async(ctx,next)=>{
	// 	ctx.set('Access-Control-Allow-Origin', '*');
	// 	ctx.response.status=200;
	// 	var {username}=ctx.request.query;
	// 	console.log(username)
	// 	let res=await userDao.getUserinfo(username);
	// 	console.log(res);
	// 	ctx.body=res
	// }
		
			
		
}
// const indexService=require('../service/indexService.js')
// const passport=require('../middleware/passport.js')
// var fs = require('fs');
// var stack=[]
// var searchUserData={
// 	'roles':[{'id':1,'rolename':'管理员'},{'id':2,'rolename':'老师'},{'id':3,'rolename':'学生'}]
// }
const loginService=require('../service/loginService.js')
const userDao=require('../dao/userDao.js')

module.exports={
	checklogin:async(ctx,next)=>{
		// ctx.set('Access-Control-Allow-Origin', '*')
		ctx.response.status=200;
		var {account,password}=ctx.request.body;
		console.log(account);
		console.log(password);
		let res=await loginService.checkLogin(account,password);
		console.log(res);
		if(res){
			ctx.response.message='{"status":200,"success":"1"}';
		}else{
			ctx.response.message='{"status":200,"success":"0"}';
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
	},
	getUserinfo:async(ctx,next)=>{
		ctx.set('Access-Control-Allow-Origin', '*');
		ctx.response.status=200;
		var {username}=ctx.request.query;
		console.log(username)
		let res=await userDao.getUserinfo(username);
		console.log(res);
		ctx.body=res
	}
		
			
		
}
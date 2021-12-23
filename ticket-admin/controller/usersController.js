
const userDao=require('../dao/userDao.js')
const usersService=require('../service/usersService.js')
module.exports={
	changePassword:async(ctx,next)=>{
		// let res=await cinemasDao.getCinemasInfo();
		console.log(ctx.request.body);
		const{id,password}=ctx.request.body;
		let res=await usersService.changePassword(id,password);
		console.log(123);

		// 如果修改成功数组[0]的值为1
		if(res[0]){
			ctx.body={success:1,info:'重置密码成功'}
		}else{
			ctx.body={success:0,info:'重置密码不能与之前的一样!'}
		}
		console.log(res);
	},
	createUserOrders:async(ctx,next)=>{
		console.log(1);
		console.log(ctx.request.body);
		let {userId,index,seat}=ctx.request.body;
        console.log(typeof ctx.request.body.seat);
		let res= await userDao.createUserOrders(userId,index,seat);
		
		ctx.body=res;
	},
	GetUserOders:async(ctx,next)=>{
		console.log(1);
		console.log(ctx.params.userId);
		let res=await userDao.GetUserOders(ctx.params.userId);
		if(res.length!==0){
			ctx.body=res;
		}else{
			ctx.body= null;
		}
		
	},
	DelUserOders:async(ctx,next)=>{
		console.log(123)
		console.log(ctx.params.id);
		let res=await userDao.DelUserOders(ctx.params.id);
		ctx.body=res;
	},
	getallUsers:async(ctx,next)=>{
		console.log(1);
		let res=await userDao.getallUsers();
		
		ctx.body=res;
	},
	deUserById:async(ctx,next)=>{
		console.log(ctx.params);
		let res=await userDao.deUserById(ctx.params.id);
		console.log(1)
		ctx.body=res;
	},
	getAllOrders:async(ctx,next)=>{
		let res=await userDao.getAllOrders();
		ctx.body=res;
	},
	getAllrole:async(ctx,next)=>{
		let res=await userDao.getAllrole();
		ctx.body=res;
	},
	deRoleById:async(ctx,next)=>{
		let res=await userDao.deRoleById(ctx.params.id);
		ctx.body=res;
	},
	upUserRoleById:async(ctx,next)=>{
		console.log(ctx.params);
		let {userId,roleId}=ctx.params;
		let res=await userDao.upUserRoleById(userId,roleId);
		ctx.body=res;
	},
	searchUserByQuery:async(ctx,next)=>{
		console.log(ctx.request.body);
		let res=await usersService.searchUserByInfo(ctx.request.body);
		if(res.length){
		console.log(res);
		console.log(res[0].dataValues.role.dataValues.rolename);
			ctx.body= {success:1,info:res}
		
		}else{
			ctx.body= {success:0,info:'没有找到符合要求的用户！'}
		}
	}
	
}
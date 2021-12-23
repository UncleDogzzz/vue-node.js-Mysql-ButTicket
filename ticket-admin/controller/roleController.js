
const roleService=require('../service/roleService.js')
const roleDao=require('../dao/roleDao.js')

module.exports={
	addRole:async(ctx,next)=>{
		const{role_name,role_description}=ctx.request.body;
		console.log(role_name)
		console.log(ctx.request.body);
		let res=await roleService.addRole(ctx.request.body);
		ctx.body=res;
	},
	UpdateRoleInfoById:async(ctx,next)=>{
		const{id,role_name,role_description}=ctx.request.body;
		let res=await roleService.UpdateRoleInfoById(id,role_name,role_description);
		ctx.body=res;
	}
	
			
		
}
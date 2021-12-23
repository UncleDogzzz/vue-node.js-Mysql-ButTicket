
																		
const{role}=require('../model/index.js')
module.exports={

	addRole:async(roleInfo)=>{
		try{
			let result=await role.create(roleInfo);
			return result;
		}catch(error){
			console.log('新增用户错误:'+error);
			return null
		}
	},
	getRoleByRoleName:async(role_name)=>{
		let res=await role.findOne({
			where:{
				role_name
			}
		})
		return res;
	},
	updateRoleInfoById:async(id,role_name,role_description)=>{
		try{
			let result=await role.update({role_name,role_description},{where: {id},});
			return result;
		}catch(error){
			console.log('修改角色错误:'+error);
			return null
		}
	}
	
	
}
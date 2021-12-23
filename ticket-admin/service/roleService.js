
const roleDao=require('../dao/roleDao.js')

module.exports={	
	addRole:async(roleInfo)=>{
		let res=await roleDao.getRoleByRoleName(roleInfo.role_name);
		if(res){
			return {success:0,info:'该角色已存在！'}
		}else{
			try{
				let resCre=await roleDao.addRole(roleInfo);
				if(resCre){
				return {success:1,info:'添加角色成功！'}
				}
				else{
					return {success:0,info:'添加角色失败！'}
				}
			}catch(e){
				return {success:0,info:'添加角色失败！'}
			}
		}

	},
	UpdateRoleInfoById:async(id,role_name,role_description)=>{
		//找角色名
		let resRoleName=await roleDao.getRoleByRoleName(role_name);
		if(resRoleName){
			return {success:0,info:'该角色名已存在'}
		}else{
			let res=await roleDao.updateRoleInfoById(id,role_name,role_description);
			if(res){
				return {success:1,info:'修改角色信息成功！'}
			}else{
				return {success:0,info:'修改角色信息失败！'}
			}
		}
	}
	
	}
	

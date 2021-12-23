import {request} from 'network/request.js'
import axios from 'axios'


//查询所有角色
export function getAllrole(){
 return request({
	 url:'/users/allrole'
 })
}

//根据ID删除角色
export function deleteRoleById(id){
 return request({
	 url:'/users/derole/'+id,
	 method:'DELETE'
 })
}



//增加角色
export function addRole(role_name,role_description){
 return request({
	 url:'/role/newrole',
	 data:{
		 role_name,
		 role_description
	 },
	 method:'POST'
 })
}


//修改对应ID角色的信息
export function updateRoleInfoByid(id,role_name,role_description){
 return request({
	 url:'/role/changeRoleById',
	 data:{
		 id,
		 role_name,
		 role_description
	 },
	 method:'PUT'
 })
}
















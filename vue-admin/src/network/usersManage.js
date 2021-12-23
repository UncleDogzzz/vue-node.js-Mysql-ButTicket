import {request} from 'network/request.js'
import axios from 'axios'


//查询所有用户
export function getAllUsers(){
 return request({
	 url:'/users/allUsers'
 })
}

//删除用户
export function deleUser(id){
 return request({
	 url:'/users/deuser/'+id,
	 method:'DELETE'
 })
}

//修改用户的角色
export function updateUserRoleById(userId,roleId){
 return request({
	 url:'/users/upUserRole/'+userId+'/'+roleId,
	 method:'PUT'
 })
}

//修改密码
export function changePassword(id,password){
 return request({
	 url:'/users/resetPassword',
	 data:{
		 id,
		 password
	 },
	 method:'put'
 })
}
//修改密码
export function searchUsersByQuery(id,account,role_id){
 return request({
	 url:'/users/UserByQuery',
	 data:{
		 id,
		 account,
		 role_id
	 },
	 method:'post'
 })
}

//增加用户
export function adduser(account,password,role_id){                //增加用户
   return request({
    url:'/adduser',
	data:{
		 account,
		 password,
		 role_id
	},
	method:'POST'
   })
}















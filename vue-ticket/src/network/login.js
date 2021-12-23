import {request} from 'network/request.js'
import axios from 'axios'


export function checklogin(account,password){

 //登陆验证
 return request({
	 url:'/checklogin',
	 data:{
		 account,
		 password
	 },
	 method:'POST'
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

//查找用户信息
export function getUserInfo(id){                //查找
   return request({
    url:'/userInfo/'+id
   })
}





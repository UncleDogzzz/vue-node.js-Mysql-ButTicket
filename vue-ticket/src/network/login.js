import {request} from 'network/request.js'
import axios from 'axios'


export function checklogin(account,password){
  //创建axiois实例
 //  const instance=axios.create({
 //  // baseURL:'http://123.207.32.32:8000',
 //  baseURL: "http://localhost:3000",
 //  timeout:5000
 //  })

 //  //设置拦截器
 //  instance.interceptors.request.use(config=>{
 //    return config
 //  },err=>{
 //    console.log(err)
 //  })

 // instance.interceptors.response.use(res=>{
 //   return res.data
 // },err=>{

 //   console.log(err)
 // })


 //  //返回实例

 //  return instance(config)
 
 return request({
	 url:'/checklogin',
	 data:{
		 account,
		 password
	 },
	 method:'POST'
 })
}




export function adduser(account,password){                //增加用户
   return request({
    url:'/adduser',
	data:{
		 account,
		 password
	},
	method:'POST'
   })
}





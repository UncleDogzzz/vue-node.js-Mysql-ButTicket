import {request} from 'network/request.js'
import axios from 'axios'


//查询所有用户订单
export function getAllUsersOrders(){
 return request({
	 url:'/users/allOrders'
 })
}

//删除用户订单
export function deleteUsersOrders(id){
 return request({
		 url:'/users/deorders/'+id,
	 	 method:'DELETE'
 })
}


















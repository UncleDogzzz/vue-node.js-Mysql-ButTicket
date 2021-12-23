import {request} from 'network/request.js'
import axios from 'axios'

// 首页影院列表
export function getCinemasInfo(account,password){
 return request({
	 url:'/getCinemasInfo'
 })
}

// 影院详情 档期
export function getCinemaDetailById(id){
 return request({
	 url:'/getCinemaDetailById/'+id
 })
}

//根据index获取对应档期的座位表
export function getCinemaDetailByIndex(index){
 return request({
	 url:'/getCinemaDetailByIndex/'+index
 })
}









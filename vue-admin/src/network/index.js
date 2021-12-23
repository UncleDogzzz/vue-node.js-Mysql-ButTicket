import {request} from 'network/request.js'
import axios from 'axios'

//首页热映电影
export function getMovieOnInfoList(account,password){
 return request({
	 url:'/movieoninfolist'
 })
}

//电影详情
export function getMovieDetail(id){
 return request({
	 url:'/MovieDetail/'+id,
 })
}







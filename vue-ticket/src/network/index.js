import {request} from 'network/request.js'
import axios from 'axios'


export function getMovieOnInfoList(account,password){
 return request({
	 url:'/movieoninfolist'
 })
}

export function getMovieDetail(id){
 return request({
	 url:'/MovieDetail/'+id,
 })
}







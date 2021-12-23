
																		
const{cinemas,cinemaDetail,moviceDetail}=require('../model/index.js')
module.exports={

	getCinemasInfo:async()=>{
		try{
		let result=await cinemas.findAll({});
		return result;
		}catch(error){
			console.log('查找错误'+error);
		}
	},
	getCinemasDetailById:async(id)=>{
		try{
		let result=await cinemaDetail.findAll({
			where:{
				cinemaId:id
			},
			include:[cinemas,moviceDetail]
		});
		return result;
		}catch(error){
			console.log('查找错误'+error);
		}
	},
	getCinemasDetailByIndex:async(index)=>{
		try{
		let result=await cinemaDetail.findOne({
			where:{
				index
			},
			include:[cinemas,moviceDetail]
		});
		return result;
		}catch(error){
			console.log('查找错误'+error);
		}
	}
	
}
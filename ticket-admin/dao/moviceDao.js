
																		
const{home,moviceDetail}=require('../model/index.js')
module.exports={

	getMovieOnInfoList:async()=>{
		try{
		let result=await home.findAll({});
		return result;
		}catch(error){
			console.log('查找错误'+error);
		}
	},
	getMoviceDetail:async(id)=>{
		try{
		let result=await moviceDetail.findOne({
			where:{
				id
			}
		});
		return result;
		}catch(error){
			console.log('查找错误'+error);
		}
	}
	
}
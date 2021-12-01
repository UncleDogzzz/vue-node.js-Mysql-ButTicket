
const moviceDao=require('../dao/moviceDao.js')

module.exports={	
	getMovieOnInfoList:async()=>{
		let res= await moviceDao.getMovieOnInfoList();
		if(res.length!=0){
					return res;
		}else{
			return null
		}
	},
	getMoviceDetail:async(id)=>{
		let res=await moviceDao.getMoviceDetail(id);
		return res;
		
	}
	}
	

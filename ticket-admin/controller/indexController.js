
const indexService=require('../service/indexService.js')


module.exports={
	getMovieOnInfoList:async(ctx,next)=>{
		console.log(ctx.request.query.id);
		ctx.status=200;
		let res= await  indexService.getMovieOnInfoList();
		console.log(res);
		if(res){
			ctx.body=res
		}else{
			ctx.body='暂时无电影列表'
		}
	},
	getMovieDetail:async(ctx,next)=>{
		console.log(1)
		console.log(ctx.params.id)
		let res=await indexService.getMoviceDetail(ctx.params.id);
		console.log(res.dataValues);
		ctx.body=res.dataValues
	}
	
			
		
}
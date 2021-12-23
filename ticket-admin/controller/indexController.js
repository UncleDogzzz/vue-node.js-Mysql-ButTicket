const fs =require('fs')
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
	},
	getMoviceImage:async(ctx,next)=>{
		var contentType={
		  "css": "text/css",
		  "gif": "image/gif",
		  "html": "text/html",
		  "ico": "image/x-icon",
		  "jpeg": "image/jpeg",
		  "jpg": "image/jpeg",
		  "js": "text/javascript",
		  "json": "application/json",
		  "pdf": "application/pdf",
		  "png": "image/png",
		  "svg": "image/svg+xml",
		  "swf": "application/x-shockwave-flash",
		  "tiff": "image/tiff",
		  "txt": "text/plain",
		  "wav": "audio/x-wav",
		  "wma": "audio/x-ms-wma",
		  "wmv": "video/x-ms-wmv",
		  "xml": "text/xml"
		}
			ctx.set("Content-Type", contentType)
			console.log(ctx.params.url)
			console.log(__dirname)
			var content =  fs.readFileSync('D:/nodetest/vue-node-ticket/ticket-admin/public/images/'+ctx.params.url);
			ctx.body=content
	}
	
			
		
}

const cinemasDao=require('../dao/cinemasDao.js')
module.exports={
	getCinemasInfo:async(ctx,next)=>{
		let res=await cinemasDao.getCinemasInfo();
		console.log(res);
		ctx.body=res;
	},
	getCinemasDetailById:async(ctx,next)=>{
		// console.log(ctx.params.id)
		let res=await cinemasDao.getCinemasDetailById(ctx.params.id);
		console.log(res);
		ctx.body=res;
	},
	getCinemasDetailByIndex:async(ctx,next)=>{
		// console.log(ctx.params.id)
		let res=await cinemasDao.getCinemasDetailByIndex(ctx.params.index);
		console.log(res);
		ctx.body=res;
	}
}
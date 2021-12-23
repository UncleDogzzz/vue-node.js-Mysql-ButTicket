const passport=require('./passport.js')


module.exports={
	apiJwtCheck:async(ctx,next)=>{
		console.log(ctx.request.header);
		if(ctx.request.header.authorization){
			return passport.authenticate('jwt',{session:false},async(err,user,info)=>{
				if(err){
					ctx.body={success:false,
					err:{code:0,msg:info},
					};
				}
				if(user){
					await next();
				}else{
					ctx.body={success:false,
					err:{code:0,msg:info},
					};
				}
			})(ctx,next)
		}else{
			ctx.body={success:false,err:{code:0,msg:'未授权用户,禁止访问'},};
		}
	}
}
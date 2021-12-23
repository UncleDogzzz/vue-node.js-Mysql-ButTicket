module.exports={
	session:{
		key:'koa:sess',
		maxAge:86400000,
		overwrite:true,
		httpOnly:true,
		signed:true,
		rolling:false,
		renew:false
	},
	jwt:{
		secretKey:'myAppToken',
		tokenExpiresTime:1000*60*30000
		// tokenExpiresTime:1000*5
	}
}
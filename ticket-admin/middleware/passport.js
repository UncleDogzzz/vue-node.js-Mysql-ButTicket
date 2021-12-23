const baseConfig=require('../config/base-config.js')
const passport=require('koa-passport')

const jwtStrategy=require('passport-jwt').Strategy
const ExtractJwt=require('passport-jwt').ExtractJwt
const opts={}
const userDao=require('../dao/userDao.js')

opts.jwtFromRequest=ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey=baseConfig.jwt.secretKey;
passport.use(new jwtStrategy(opts,async(jwt_payloads,done)=>{
	console.log(jwt_payloads);
	console.log('发布时间:'+new Date(jwt_payloads.iat));
	console.log('过期时间:'+new Date(jwt_payloads.exp));
	let nowDate=new Date();
	if(nowDate.getTime() <=jwt_payloads.exp){
		const user=await userDao.getUserById(jwt_payloads.userid);
		if(user){
			return done(null,user,'token验证成功')
		}else{
			return done(null,false,'token验证失败')
		}
	}else{
		return done(null,false,'token过期');
	}	
}))
module.exports=passport

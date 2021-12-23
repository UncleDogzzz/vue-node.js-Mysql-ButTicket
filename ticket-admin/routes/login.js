const router = require('koa-router')()
const loginController=require('../controller/loginController.js')
const oauthCheck=require('../middleware/oauthCheck.js')
const indexController=require('../controller/indexController.js')


router.get('/', async(ctx,next)=>{
	await ctx.render('index',
	)
})

router.get('/public/images/:url',indexController.getMoviceImage)  //图片加载

router.post('/checklogin',loginController.loginGetToken);			//登陆检查

router.post('/adduser',loginController.addUser);			//用户注册


	

router.all('*',oauthCheck.apiJwtCheck);   //token验证
router.get('/userInfo/:id',loginController.getUserInfo);

// router.get('/getCinemaSeat',loginController.getCinemaSeat);
 


// router.get('/CreateCusInfo',loginController.CreateCusInfo);

// router.get('/getUserinfo',loginController.getUserinfo);


router.delete('/hommm',async(ctx,next)=>{
	
})
module.exports = router

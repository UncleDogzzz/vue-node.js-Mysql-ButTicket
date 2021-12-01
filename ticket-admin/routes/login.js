const router = require('koa-router')()
const loginController=require('../controller/loginController.js')


router.post('/checklogin',loginController.checklogin);			//登陆检查

router.post('/adduser',loginController.addUser);			//用户注册

router.get('/getCinemaSeat',loginController.getCinemaSeat);


router.get('/CreateCusInfo',loginController.CreateCusInfo);

router.get('/getUserinfo',loginController.getUserinfo);


router.delete('/hommm',async(ctx,next)=>{
	
})
module.exports = router

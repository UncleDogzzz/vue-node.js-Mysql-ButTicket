const router = require('koa-router')()
const cinemasController=require('../controller/cinemasController.js')

router.get('/getCinemasInfo',cinemasController.getCinemasInfo);
// router.get('/testt/:id', async(ctx,next)=>{
// 	console.log(ctx.params)
// })
router.get('/getCinemaDetailById/:id',cinemasController.getCinemasDetailById);
router.get('/getCinemaDetailByIndex/:index',cinemasController.getCinemasDetailByIndex);
module.exports = router

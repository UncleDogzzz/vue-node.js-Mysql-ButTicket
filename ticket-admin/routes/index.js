const router = require('koa-router')()
const indexController=require('../controller/indexController.js')

router.get('/movieoninfolist', indexController.getMovieOnInfoList)
router.get('/MovieDetail/:id', indexController.getMovieDetail)

// router.get('/testt/:id', async(ctx,next)=>{
// 	console.log(ctx.params)
// })

module.exports = router

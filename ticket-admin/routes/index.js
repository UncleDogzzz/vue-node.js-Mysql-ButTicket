const router = require('koa-router')()
const indexController=require('../controller/indexController.js')

// router.get('/public/images/:url',indexController.getMoviceImage)  //图标加载

router.get('/movieoninfolist', indexController.getMovieOnInfoList)
router.get('/MovieDetail/:id', indexController.getMovieDetail)






module.exports = router

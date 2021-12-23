const router = require('koa-router')()
const roleController=require('../controller/roleController.js')
router.prefix('/role')

router.post('/newrole',roleController.addRole);

router.put('/changeRoleById',roleController.UpdateRoleInfoById);
module.exports = router

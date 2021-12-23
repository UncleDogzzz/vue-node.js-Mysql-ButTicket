const router = require('koa-router')()
const usersController=require('../controller/usersController.js')
router.prefix('/users')

router.put('/resetPassword',usersController.changePassword);

router.post('/newOrders',usersController.createUserOrders);
router.get('/myoders/:userId',usersController.GetUserOders);
router.delete('/deorders/:id',usersController.DelUserOders);

router.get('/allUsers',usersController.getallUsers);

router.delete('/deuser/:id',usersController.deUserById);

router.get('/allOrders',usersController.getAllOrders);

router.get('/allrole',usersController.getAllrole);

router.delete('/derole/:id',usersController.deRoleById);

router.put('/upUserRole/:userId/:roleId',usersController.upUserRoleById);

router.post('/UserByQuery',usersController.searchUserByQuery);

module.exports = router

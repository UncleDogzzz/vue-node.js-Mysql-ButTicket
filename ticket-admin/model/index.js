const config=require('../config/db-config.js')
const Sequelize=require('sequelize')
const{DataTypes}=require('sequelize')

var sequelizeObj=new Sequelize(
	config.mysql.database,
	config.mysql.user,
	config.mysql.password,
	config.sequelize
);
const user=require('./user.js')(sequelizeObj,DataTypes);
const home=require('./home.js')(sequelizeObj,DataTypes);
const cinemas=require('./cinemas.js')(sequelizeObj,DataTypes);  //影院列表
const customer=require('./customer.js')(sequelizeObj,DataTypes);
const moviceDetail=require('./moviceDetail.js')(sequelizeObj,DataTypes);
const cinemaDetail=require('./cinemaDetail.js')(sequelizeObj,DataTypes); //档期
const userOrders=require('./userOrders.js')(sequelizeObj,DataTypes); // 用户订单
const role=require('./role.js')(sequelizeObj,DataTypes);


//影院列表与档期表表 关系一对多
cinemas.hasMany(cinemaDetail,{
	foreignKey:'cinemaId',
	sourceKey:'id'
})
cinemaDetail.belongsTo(cinemas,{
	foreignKey:'cinemaId',
	targetKey:'id'
})

// 电影详细表与档期表 关系一对多
moviceDetail.hasMany(cinemaDetail,{
	foreignKey:'moviceId',
	sourceKey:'id'
})

cinemaDetail.belongsTo(moviceDetail,{
	foreignKey:'moviceId',
	targetKey:'id'
})


// 档期表与用户订单表 关系一对多
cinemaDetail.hasMany(userOrders,{
	foreignKey:'scheduleId',
	sourceKey:'index'
})

userOrders.belongsTo(cinemaDetail,{
	foreignKey:'scheduleId',
	targetKey:'index'
})


// 影院列表与用户订单表 关系一对多
cinemas.hasMany(userOrders,{
	foreignKey:'cinemaId',
	sourceKey:'id'
})

userOrders.belongsTo(cinemas,{
	foreignKey:'cinemaId',
	targetKey:'id'
})

// 电影详细表与用户订单表 关系一对多
moviceDetail.hasMany(userOrders,{
	foreignKey:'moviceId',
	sourceKey:'id'
})

userOrders.belongsTo(moviceDetail,{
	foreignKey:'moviceId',
	targetKey:'id'
})


// 用户表与用户订单表 关系一对多
user.hasMany(userOrders,{
	foreignKey:'userId',
	sourceKey:'id'
})

userOrders.belongsTo(user,{
	foreignKey:'userId',
	targetKey:'id'
})








// 角色管理表与用户表 关系一对多
role.hasMany(user,{
	foreignKey:'role_id',
	sourceKey:'id'
})

user.belongsTo(role,{
	foreignKey:'role_id',
	targetKey:'id'
})






module.exports={user,home,cinemas,customer,moviceDetail,cinemaDetail,userOrders,role}
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
const cinemas=require('./cinemas.js')(sequelizeObj,DataTypes);
const customer=require('./customer.js')(sequelizeObj,DataTypes);
const moviceDetail=require('./moviceDetail.js')(sequelizeObj,DataTypes);


module.exports={user,home,cinemas,customer,moviceDetail}
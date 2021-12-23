module.exports=function(sequelize,DataTypes){
	return sequelize.define(
		'cinemasschedule',
		{
			index:{
				type:DataTypes.INTEGER,
				primaryKey:true
			},
			cinemaId:{
				type:DataTypes.INTEGER,
				field:'cinemaId'
			},
			moviceId:{
				type:DataTypes.INTEGER,
				field:'moviceId'
			},
			time:{
				type:DataTypes.STRING,
				field:'time'
			},
			seat:{
				type:DataTypes.STRING,
				field:'seat'
			},
			price:{
				type:DataTypes.STRING,
				field:'price'
			}
			
		
		}
	)
}
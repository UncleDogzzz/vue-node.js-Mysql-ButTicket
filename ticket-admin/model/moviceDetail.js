module.exports=function(sequelize,DataTypes){
	return sequelize.define(
		'movicedetail',
		{
			id:{
				type:DataTypes.INTEGER,
				primaryKey:true,
				autoIncrement:true
			},
			img:{
				type:DataTypes.STRING,
				field:'img'
			},
			name:{
				type:DataTypes.STRING,
				field:'name'
			},
			ename:{
				type:DataTypes.STRING,
				field:'ename'
			},
			cat:{
				type:DataTypes.STRING,
				field:'cat'
			},
			star:{
				type:DataTypes.STRING,
				field:'star'
			},
			pubDesc:{
				type:DataTypes.STRING,
				field:'pubDesc'
			},
			wish:{
				type:DataTypes.INTEGER,
				field:'wish'
			},
			watched:{
				type:DataTypes.INTEGER,
				field:'watched'
			},
			score:{
				type:DataTypes.STRING,
				field:'score'
			},
			snum:{
				type:DataTypes.INTEGER,
				field:'snum'
			},
			introduction:{
				type:DataTypes.STRING,
				field:'introduction'
			},
			video:{
				type:DataTypes.STRING,
				field:'video'
			}
		
		}
	)
}
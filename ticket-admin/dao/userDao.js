const{user,cinemas,customer,userOrders,cinemaDetail,moviceDetail,role}=require('../model/index.js')
module.exports={
	getUserByAccount:async(account)=>{
		try{
		let result=await user.findOne({
			where:{
				account
			}
		})
		return result;
		}catch(error){
			console.log('查找错误'+error);
		}
	},
	getUserById:async(id)=>{
		try{
		let result=await user.findOne({
			where:{
				id
			},
			include:[role]
		})
		return result;
		}catch(error){
			console.log('查找错误'+error);
		}
	},
	addUser:async(data)=>{
		try{
			let result=await user.create(data);
			return result;
		}catch(error){
			console.log('新增用户错误:'+error);
			return null
		}
	},
	
	changePassword:async(id,password)=>{        //修改密码
		try{
			let result=await user.update({password},{where: {id},});
			return result;
		}catch(error){
			console.log('重置密码错误:'+error);
			return null
		}
	},
	UpdateSeat:async(index,seat)=>{            //更新座位
	var row=seat.keys;
	console.log(row);
		// let result=await cinemaDetail.update({seat},{where: index});
	},
	createUserOrders:async(userId,index,seat)=>{		//新增用户订单
		
		// 传入三个参数 用户id  档期index 座位seat
		
		// 获取座位的行列
		var row=seat['row']
		var cul=seat['cul'];
		var userSeat=`{"${row}":"${cul}号"}`;
		console.log(userSeat);
		console.log(row);
		console.log(cul);
		
		//根据档期index获取全部座位
		var cinemaList=await cinemaDetail.findOne({
			where:{
				index
			}
		})
		let{cinemaId,moviceId,time,price}=cinemaList;
		console.log(cinemaId)
		console.log(moviceId)
		console.log(time)
		console.log(price)
		cinemaList=JSON.parse(cinemaList.seat);
		console.log(cinemaList);
		cinemaList[row][cul-1]=1;
		var newSeat=JSON.stringify(cinemaList);
		console.log(newSeat);
		
		// 更新座位
		let resSeat=
		await cinemaDetail.update(
		{
			seat:newSeat,
		},
		{
			where:{
				index
			}
		}
		);
		// 如果座位更新了
		if(resSeat[0]){
			// 订单表插入数据
		let resCeate=await userOrders.create({
			userId,
			cinemaId,
			moviceId,
			time,
			seat:userSeat,
			scheduleId:index,
			price
		})
		console.log(resCeate);
		// let res=await userOrders.findAll({
		// 	include:[cinemaDetail,cinemas,moviceDetail]               //订单表与档期表 一对多
		// });
		// console.log(res);
		if(resCeate){
		return {success:1,info:'购买成功！'};
		}else{
			return {success:0,info:'购买失败！'};
		}
		
		}else{
			return {success:0,info:'购买失败！此座位已售，请刷新重新选择座位'};
		}
	},
	
	
	GetUserOders:async(userId)=>{
	  let res=await	userOrders.findAll({
		  where:{
			  userId
		  },
		  include:[cinemaDetail,cinemas,moviceDetail]               //订单表与其他表 一对多
	  });
	  return res;
	},
	DelUserOders:async(id)=>{
		
		try{
		// 根据订单ID获取 订单信息
		let resOrder=await	userOrders.findOne({
				  where:{
					  id
				  }
		});
		var {scheduleId}=resOrder;
		console.log(typeof resOrder.seat)
		var row=  Object.keys(JSON.parse(resOrder.seat))[0];
		console.log(row);
		var cul=JSON.parse(resOrder.seat)[row].replace(/(号)/g,'');
		console.log(cul);
		
		//根据档期ID 获取对应档期
		var cinemaList=await cinemaDetail.findOne({
			where:{
				index:scheduleId
			}
		})
		 //获取对应档期的全部座位
		var allSeat=JSON.parse(cinemaList.seat);
		//找到对应的座位并且设置值为0 即为空
		console.log(allSeat);
		allSeat[row][cul-1]=0;
		console.log(allSeat);
		allSeat=JSON.stringify(allSeat);
		
		// 更新座位
		let resSeat=
		await cinemaDetail.update(
		{
			seat:allSeat,
		},
		{
			where:{
				index:scheduleId
			}
		}
		);
		//删除订单
		let resDeOrder=await userOrders.destroy({
			where:{
				id
			}
		});
		
		return {success:1,info:'删除订单成功'};
	}
	catch(err){
		console.log(err);
		return {success:0,info:'删除订单失败'};
	}
	},
	getallUsers:async()=>{
		let res=await user.findAll({
			include:[role]
		});
		
		
		return res;
	},
	deUserById:async(id)=>{
		try{
			let resDeOrder=await user.destroy({
				where:{
					id
				}
			});
			return {success:1,info:'删除用户成功！'}
		}catch(e){
			return {success:0,info:'删除用户失败'}
		}
	},
	getAllOrders:async()=>{
		let res=await	userOrders.findAll({
				  include:[cinemaDetail,cinemas,moviceDetail,user]               //订单表与其他表 一对多
		});
		return res;
	},
	getAllrole:async()=>{
		let res=await role.findAll({
			
		});
		return res;
	},
	deRoleById:async(id)=>{
		try{
			await role.destroy({
				where:{
					id
				}
			});
			return {success:1,info:'删除角色成功!'}
		}catch(e){
			return {success:0,info:'删除角色失败'}
		}
	},
	upUserRoleById:async(userId,roleId)=>{
		await user.update({role_id:roleId},{where: {id:userId},});
		return {success:1,info:'修改角色成功!'}
	},
	getUsersBySearchInfo:async(query)=>{
		try{
			let result=await user.findAll({
				where:query,
				attributes:['id','account','role_id'],
				include:[role]
			});
			return result;
		}catch(error){
			console.log('根据条件查询用户出错:'+error);
			return null
		}
	}
	
	
	// getCinemaSeat:async(cinemaid,moviceid)=>{
	// 	console.log(cinemaid);
	// 	console.log(cinemas)
	// 	let res=await cinemas.findOne({
	// 		where:{
	// 			cinemaid
	// 		}
	// 	});
	// 	return res;
	// },
	
	
	
	
	// CreateCusInfo:async(data)=>{
	// 	let result=await customer.create(data);
	// 	return result;
	// },
	
	// getUserinfo:async(username)=>{
	// 	let res=await customer.findAll({
	// 		where:{username},
	// 		attributes:['cinemaid','moviceid','seat','price','time'],
	// 	})
	// 	return res;
	// }
}
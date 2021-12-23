<template>
	<div>
		 <!--  //导航栏 -->
		 
		<nav-bar class='home-nav'>
			<i class="el-icon-back" slot='left' @click='back()' ></i>
			<div slot='center'>我的订单</div> 
			</nav-bar>    
			  <!-- 订单 -->
			  
			  <div style="margin-top: 57px;background-color: #EEE5DE;" v-if="orders">
			<div class="content111" v-for="item in orders">
				<div class="cinema-info11111">
					<div class="cinema-name">{{item.cinema.name}}</div>
					<div class="state">已支付</div>
				</div>
				<div class="content-mid">
					<div class="mid-img">
						<img :src="item.movicedetail.img" />
					</div>
					<div class="mid-mid">
						<div class="cinema-title">{{item.movicedetail.name}}</div>
						<div class="cinema-time">{{item.time}}</div>
						<div class="cinema-seat">{{item.seat.replace(/(\{|\}|\")/g,'')}}</div>
					</div>
					<div class="mid-left">
						<el-button type="danger" plain size="mini">联系客服</el-button>
						</div>
				</div>
			<div class="cinema-info111112">
				<div class="cinema-name">总价：{{item.price}}</div>
				<div class="state1"><el-button round size="mini" @click='cancelOrder(item.id)'>取消订单</el-button></div>
			</div>
			</div>
		</div>
		<div v-else style="margin-top: 57px;font-size: 20px;">
			您还暂时没有订单哦！快去买票吧！
		</div>
	
	
	
	
	</div>
</template>

<script>
	import NavBar from 'components/navbar/NavBar.vue'
	import {getOrders,delOrder} from 'network/user.js'
	export default{
		name:'Myorders',
		components:{
			NavBar
		},
		data(){
			return{
				orders:''
			}
		},
		methods:{
			back(){
				this.$router.back();
			},
			cancelOrder(id){
				console.log(1);
				console.log(id);
				 this.$confirm('此操作将永久删除该订单, 是否继续?', '提示', {
				          confirmButtonText: '确定',
				          cancelButtonText: '取消',
				          type: 'warning',
				          center: true
				        }).then(() => {
							
							delOrder(id).then(res=>{
								console.log(res);
								if(res.success){
									this.$message({
									  type: 'success',
									  message: res.info,
									  duration:2000
									});
								}else{
									this.$message({
									  type: 'error',
									  message: res.info,
									  duration:2000
									});
								}
								//重新获取订单 不用刷新
								getOrders(this.$store.state.user.data.id).then(res=>{
									console.log(res);
									this.orders=res;
								})
								
							})
	
				         
				        }).catch(() => {
				          this.$message({
				            type: 'info',
				            message: '已取消删除'
				          });
				        });
			}
		},
		mounted(){
			console.log(this.$store.state.user.data.id);
			getOrders(this.$store.state.user.data.id).then(res=>{
				console.log(res);
				this.orders=res;
			})
		}
	}
</script>

<style>
	.home-nav{
	  background-color: /* #42bd56; */#0a9396;
	  color: black;
	  position: fixed;                   /* 设置导航栏位置为固定 */
	  top:0;
	  left: 0;
	  right: 0;
	  z-index: 9;
	  font-size: 19px;
	}
	.cinema-info11111{
		border-bottom: #f2f2f2 solid 2px;
		font-size: 13px;
		height: 28px;
		padding-bottom: 2px;
		padding-top: 1px;
		color:#9c9592;
		display: flex;

	}
	.cinema-info111112{
	
		font-size: 13px;
		height: 32px;
		padding-bottom: 2px;
		padding-top: 4px;
		color:#9c9592;
		display: flex;
	
	}
	.state{
		margin-top: 7px;
		margin-left: 192px;
	}
	.state1{
		margin-top: 1px;
		margin-left: 206px;
	}
	.cinema-name{
		/* margin-bottom: 16px; */
		margin-top: 7px;
	}
	.content111{
		border: #f2f2f2 solid 2px;
		padding-left: 11px;
		margin-top: 9px;
		margin-left: 2px;
		background-color: white;
	}
	.content-mid{
		display: flex;
		margin-top: 20px;
		border-bottom: #f2f2f2 solid 2px;
	    padding-bottom: 0;
	}
	.mid-img img{
		width: 117px;
		height: 136px;
	}
	.mid-mid{
		margin-top: 16px;
		margin-left: 15px;
		margin-bottom: 51px;
	}
	.cinema-title{
		font-size: 18px;
		margin-bottom: 34px;
	}
	.cinema-time{
		color: #7f7878;
		margin-bottom: 3px;
		font-size: 15px;
	}
	.cinema-seat{
		color: #66605b;
		font-size: 15px;
	}
	.mid-left{
		margin-top: 73px;
		margin-left: 39px;
	}
</style>

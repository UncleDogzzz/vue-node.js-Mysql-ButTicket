<template>
	<div class="containerss">
		
		<nav-bar class='home-nav'><div slot='center'> 我的 </div> </nav-bar>       <!--  //导航栏 -->
		<div style="margin-top: 26px;">
		  <div   class="userinfo">
		    <img class="userinfo-avatar" src="~assets/img/ava.png"></img>
		    <span class="userinfo-nickname">{{$store.state.user.data.account}}</span>
		  </div>
		  <div class="info">
		    <el-button type="primary" plain style="width: 150px;" @click.native='ToMyorders'>个人订单</el-button>
		  </div>
		  <div class="info">
		    <el-button plain style="width: 150px;"@click.native='ChangePass()'>修改密码</el-button>
		  </div>
		  <div class="info">
		    <el-button plain type="danger" style="width: 150px;" @click.native='quit()'>退出登录</el-button>
		  </div>
		</div>
		
		
		
		
		
		<main-tab-bar></main-tab-bar>
	</div>

</template>

<script>
	import NavBar from 'components/navbar/NavBar.vue'
	import MainTabBar from 'components/MainTabBar/MainTabBar.vue'
	import{changePassword,getOrders} from'network/user.js'
	export default{
		name:'My',
		components:{
			MainTabBar,
			NavBar
		},
		methods:{
			ToMyorders(){
				this.$router.push('/myorders');
			},
			
			
			quit(){
				
				this.$confirm('确定是否退出?', '提示', {
				          confirmButtonText: '确定',
				          cancelButtonText: '取消',
				          type: 'warning'
				        }).then(() => {
				          // this.$message({
				          //   type: 'success',
				          //   message: '删除成功!'
				          // });
						  console.log(1);
						  this.$store.commit('changeQuit');
						  this.$router.push('/');
				        }).catch(() => {
				          // this.$message({
				          //   type: 'info',
				          //   message: '已取消删除'
				          // });          
				        });
				      
					  
				
				
				
				
				
				
				
			
			},
			ChangePass() {
				
				// console.log(this.$store.state.user.data.id);
				
				
			        this.$prompt('请输入新密码', '提示', {
			          confirmButtonText: '确定',
			          cancelButtonText: '取消',
			        }).then(({ value }) => {
						console.log(typeof value);
						changePassword(this.$store.state.user.data.id,value).then(res=>{
							console.log(res);
							if(res.success){
								this.$message({
								  type: 'success',
								  message: '修改成功！您的新密码是: ' + value
								});
							}else{
								this.$message({
								  type: 'error',
								  message: res.info
								});
							}
							
						})
			      
					  
			        }).catch(() => {
			          this.$message({
			            type: 'info',
			            message: '取消修改密码'
			          });       
			        });
			      }
		},
		mounted() {
			
		}
	}
</script>

<style>
	.el-message-box{
		width: 80%;
	}
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
	
	.containerss {
	  padding: 10px 0px;
	  background-color: #F2f2f2;
	  /* height: 999px; */
	}
	.userinfo {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	}
	.userinfo-avatar {
	  width: 135px;
	  height: 135px;
	  margin: 20px;
	  border-radius: 50%;
	}
	.userinfo-nickname {
	  color: #aaa;
	}
	.info{
		margin-left: 31%;
		margin-top: 25px;
	}
</style>

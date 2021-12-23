<template>
	<div >

	
	
	
	<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
	  <el-radio-button :label="false">展开</el-radio-button>
	  <el-radio-button :label="true">收起</el-radio-button>
	</el-radio-group>
	<el-menu :default-active="active" class="el-menu-vertical-demo" @select="handleOpen" :collapse="isCollapse" active-text-color="#ffd04b" ref='menu'>
	 
	 <!-- //判断是不是超级管理员 -->
	  <el-menu-item index="1" v-show="$store.state.user.role_id==1">
	    <i class="el-icon-user-solid"></i>
	    <span slot="title">用户管理</span>
	  </el-menu-item>
	  
	  <!-- //判断是不是超级管理员 -->
	  <el-menu-item index="2"  v-show="$store.state.user.role_id==1">
	    <i class="el-icon-lock"></i>
	    <span slot="title">角色管理</span>
	  </el-menu-item>


	<el-submenu index="3">   
	    <template slot="title">
	      <i class="el-icon-s-tools"></i>
	      <span slot="title">电影管理</span>
	    </template>
	    <el-menu-item-group>
			
	      <el-menu-item index="3-1"><i class="el-icon-s-unfold"></i>热映电影</el-menu-item>
	    </el-menu-item-group>
		
		<el-menu-item-group>
			      <el-menu-item index="3-2"><i class="el-icon-s-unfold"></i>电影详情</el-menu-item>
			    </el-menu-item-group>
	 
	  </el-submenu>

	  <el-submenu index="4"  >
	  	    <template slot="title">
	  	      <i class="el-icon-setting"></i>
	  	      <span slot="title">影院管理</span>
	  	    </template>
	  	    <el-menu-item-group>
	  <!-- 	      <span slot="title">电影</span> -->
	  	      <el-menu-item index="4-1"><i class="el-icon-tickets"></i>上映影院</el-menu-item>
	  	    </el-menu-item-group>
	  		
	  		<el-menu-item-group>
	  			      <el-menu-item index="4-2"><i class="el-icon-tickets"></i>档期管理</el-menu-item>
	  			    </el-menu-item-group>		
	  	
	  	  </el-submenu>
		  
 <!-- //判断是不是超级管理员 -->
	  <el-menu-item index="5"  v-show="$store.state.user.role_id==1">
	    <i class="el-icon-document"></i>
	    <span slot="title">订单管理</span>
	  </el-menu-item>




	</el-menu>
	


	
	
	
	
	<el-button type="primary"  round @click.native='test()' size='mini' >退出</el-button>
	
	
	
	
	
	</div>
</template>

<script>
	export default{
		name:'Homes',
		methods:{
			test(){
				console.log(1)
				this.$router.push('/');
			},
			     handleOpen(key, keyPath) {
					 var url;
					 var firstUrl=['/usersManage','/roleManage',{'/movicesManage':['/movicesHot','/moviceDetail']},{'/cinemasManage':['/cinemasList','/cinemasTimeInfo']},'/usersOrders'];
					 
			        // console.log(key, keyPath);
					console.log(key);
					console.log(keyPath);
					if(keyPath.length>1){
						// var r=key.split('-')[1]);
						var front=Object.keys(firstUrl[keyPath[0]-1]);
						front=front[0];
						var back=firstUrl[keyPath[0]-1][front][key.split('-')[1]-1]
					  console.log(back);
						var url=front+back;
						console.log(url)
						this.$emit('Topath',url);
						this.$router.push(url)
				
					}else{
						url=firstUrl[key-1];
						console.log(url);
						this.$emit('Topath',url);
						this.$router.push(url)
					}
			      },
			      handleClose(key, keyPath) {
			        console.log(key, keyPath);
					
			      }
		},
		 data() {
		      return {
		        isCollapse: true,
				active:"1"
		      };
		    },
			mounted() {
				console.log(typeof this.$store.state.user.role_id);
				console.log(this.$refs.menu);
				// if(this.$store.state.user.role_id!==3){
				// 	this.active='3-1';
				// }else{
				// 	this.active='1';
				// }
			}
	}
</script>

<style>
	.el-menu-vertical-demo:not(.el-menu--collapse) {
	    width: 200px;
	    min-height: 400px;
	  }
</style>

<template>
  <div id="app" >
  <!-- <keep-alive exclude="Login,Movice,Cinemas,CinemasDetail,Order" >                      <!-- 保持状态 不会被销毁 除了登录 --> 
   <router-view></router-view>
    <!-- </keep-alive> -->

  </div>
</template>

<script>
import Login from 'views/Login/Login.vue'

export default {
  name: 'App',
  data(){
return {
	isLogin:false,
	isSuccess:false
}
  },
  components: {
	Login
  },
  methods:{
	success(){
		console.log('success');
		this.isSuccess=true;
		this.isLogin=true;
		setTimeout(()=>{
			this.isSuccess=false;
		},4000)
		this.$router.push('/home')
	}
  },
  mounted(){
	  console.log(this.$route)
  }
}
</script>

<style>
#app {
 @import "assets/css/base.css";
}
</style>

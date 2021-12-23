<template>
	<div class="login-container">

		<div class="card-box login-form">
		  <h3 class="title">后台管理系统登录</h3>

		  <div class="el-form-item el-form-item--feedback is-required el-form-item--small">
		  <span class="svg-container svg-container_login">
		    <i icon-class="name" class="el-icon-user" />
		  </span>
		  <el-input
		    type="text"
		    autocomplete="on"
		    v-model="loginForm.account"
			 style="background: transparent;"
		    placeholder="请输入账号"/>
</div>

 <div class="el-form-item el-form-item--feedback is-required el-form-item--small">
		  <span class="svg-container svg-container_login">
		    <i icon-class="name" class="el-icon-lock" />
		  </span>
		  <el-input
		    type="text"
			show-password
		    autocomplete="on"
		    v-model="loginForm.password"
			 style="background: transparent;"
		    placeholder="请输入密码"/>
</div>

		<el-button
		  type="primary"
		  style="width:100%;margin-top: 20px;"
		  :loading="btnLoading"
		  @click.native='Tologin()'
		>登录</el-button>
		  </div>
		
	</div>
</template>

<script>
	import {checklogin,getUserInfo} from'network/login.js'
	import{setCookie} from '../../utils/cookie.js'
	export default{
		name:'Login',
		mounted() {
		},
		data(){
			return{
				loginForm: {
				  account: '',
				  password: ''
				},
				btnLoading:false
			}
		},
		methods:{
			Tologin(){
				console.log(12);
				console.log(this.$store.state)
				// this.btnLoading=true;
				if (!this.loginForm.account||!this.loginForm.password){
					this.$message.error('账号或者密码不能为空');
					setTimeout(()=>{
					   this.btnLoading=false;
					},1500)
				}else{
					//验证登陆
					checklogin(this.loginForm.account,this.loginForm.password).then(res=>{
						console.log(res);
						if(res.success=='1'){
							console.log(res);
							setCookie(res.data.token);  //把token存在 cookie
							this.$router.push('/home');
							// console.log(this.$store.state.token)
							// this.$store.commit('setToken',res.data.token);
							// let getTokenInfo=JSON.parse(decodeURIComponent((escape(window.atob(res.data.token.split('.')[1])))));
							// console.log(getTokenInfo);
							//获取信息
							// getUserInfo(getTokenInfo.userid).then(res=>{
							// 	console.log(res);
							// 	if(res.success){
							// 		this.$router.push('/home');
							// 	}else{
							// 		this.$message.error('获取用户信息失败!');
							// 	}
							// 	// // 判断权限
							// 	// if(res.data.role_id==1||res.data.role_id==2){
							// 	// 	this.$store.commit('saveUser',res.data);  //把用户信息存在 vux
							// 	// 	console.log('成功');
							// 	// 	this.$router.push('/home');
									
							// 	// }else{
							// 	// 	this.$store.commit('resetToken');  //重置token
							// 	// 	this.$message.error('没有权限登陆!');
							// 	// 	setTimeout(()=>{
							// 	// 	   this.btnLoading=false;
							// 	// 	},1000)
							// 	// }
							// })
						}else{
							this.$message.error('账号或密码错误!');
							setTimeout(()=>{
							   this.btnLoading=false;
							},1000)
						}
					})
				}
			}
		}
	}
</script>

<style>
		.login-container{
			position: relative;
			width: 100%;
			height: 100%;
			height: 100vh;
			overflow-y: hidden;
			background-color: #2d3a4b;
			text-rendering: optimizeLegibility;
			font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
		}
		.el-input__inner {
		    -webkit-appearance: none;
		    background-image: none;
		    border-radius: 4px;
		    border: 0;
		    box-sizing: border-box;
		    /* color: #606266; */
			/* color: white; */
			color: #a9a9a9;
		    display: inline-block;
		    font-size: inherit;
		    height: 40px;
		    line-height: 40px;
		    outline: 0;
		    padding: 0 15px;
		    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
		    width: 100%;
			margin-top: 5px;
			background: transparent;
			padding-left: 0px;
		}

	  input {
	    background: transparent;
	    border: 0;
	    -webkit-appearance: none;
	    border-radius: 0;
	    padding: 12px 5px 12px 15px;
	    color: $light_gray;
	    height: 47px;
	  }
	  .el-input {
	    display: inline-block;
	    height: 47px;
	    width: 85%;
		color: white;
	  }
	  .tips {
	    font-size: 14px;
	    color: #fff;
	    margin-bottom: 10px;
	  }
	  .svg-container {
	    padding: 6px 5px 6px 15px;
	    color: $dark_gray;
	    vertical-align: middle;
	    width: 30px;
	    display: inline-block;
	    &_login {
	      font-size: 20px;
	    }
	  }
	  .title {
	    font-size: 26px;
	    color: #eeeeee;
	    margin: 0 auto 40px auto;
	    text-align: center;
	    font-weight: bold;
	  }
	  .login-form {
	    position: absolute;
	    left: 0;
	    right: 0;
	    width: 400px;
	    padding: 35px 35px 15px 35px;
	    margin: 120px auto;
	  }
	  .el-form-item {
	    border: 1px solid rgba(255, 255, 255, 0.1);
	    background: rgba(0, 0, 0, 0.1);
	    border-radius: 5px;
	    color: #454545;
	  }
	  .show-pwd {
	    position: absolute;
	    right: 10px;
	    top: 7px;
	    font-size: 16px;
	    color: $dark_gray;
	    cursor: pointer;
	  }
</style>

<template>
	<div :style="{height:height+'px'}" class="ct">
		<div style="padding-top: 50%;">
		<div class="title">买票票</div>
		
  <div class="login">
	  <el-form ref="form" :model="form" >
<el-form-item label="请输入账号"><el-input style="width: 250px;" placeholder="请输入账号" v-model="form.account"clearable ></el-input></el-form-item>
<el-form-item label="请输入密码"><el-input style="width: 250px;" placeholder="请输入密码" v-model="form.password" show-password></el-input></el-form-item>
<el-button type="success" style="margin-left: %;" @click="onSubmit">登录</el-button>
<el-button type="primary" style="margin-left: %;" @click="toRegister">去注册</el-button>


</el-form>
  </div>
  
  
  
  <transition name="el-zoom-in-center">
	<el-alert v-if="isFail" ref='fail'
	    :title="info"
	    type="error"
	    effect="dark" style="position: absolute;top: 0;">
	  </el-alert>
	  </transition>
	  
	  
	  <transition name="el-zoom-in-center">
	  	  <el-alert v-if="quit"
	  	      title="退出成功! 下次再见!"
	  	      type="success"
	  	      effect="dark" style="position: absolute;top: 0;z-index: 999;">
	  	    </el-alert>
	  		</transition>
	  </div>
  </div>
</template>

<script>
	import{checklogin} from 'network/login.js'
	import{setCookie} from '../../utils/cookie.js'
	export default{
		name:'Login',
		data(){
			return{
				form:{
					account:'',
					password:''
				},
				info:'',
				height:'',
				isFail:false,
				quit:false
			}
		},
		methods:{
			onSubmit(){
				console.log(11);
				console.log(this.form);
				if(!this.form.password||!this.form.account){   
					this.isFail=true;
					this.info='账号或密码不能为空!';
					setTimeout(()=>{
						this.isFail=false;
					},3000)
				} else{
					console.log(222)
					checklogin(this.form.account,this.form.password).then(res=>{   //调用登陆检查API
						console.log(res);
						if(res.success=='1'){
							console.log('yes');
							setCookie(res.data.token);
							console.log(res.data.token);
							this.$store.commit('changeSuccess');
							this.$router.push('/home')
						}else{
							console.log('no');
							this.isFail=true;
							this.info='账号或密码错误!';
							setTimeout(()=>{
								this.isFail=false;
							},3000)
						}
					})
				}
				
				// if(this.form.account==123&&this.form.password==321){
				// 	console.log('yes');
				// 	this.$router.push('/home')
				// }else{
				// 	this.isFail=true;
				// 	setTimeout(()=>{
				// 		this.isFail=false;
				// 	},3000)
				// }
		},
		toRegister(){
			this.$router.push('/register')
			}
	},
	mounted() {
		this.height=window.screen.height ;
		this.quit=this.$store.state.quit;
		console.log(this.quit);
		if(this.quit){
			setTimeout(()=>{
				this.$store.commit('changeQuit');
				this.quit=!this.quit;
			},4000)
		}
		// request222(123,3211).then(res=>{
		// 	console.log(res)
		// 	// var s=JSON.parse(res);
		// 	console.log(res.name)
		// })
	}
	}
</script>

<style>
.title{
	text-align: center;
	color: #FF5777;
	font-weight: 800;
	font-size: 25px
}
.ct{
		background-color: antiquewhite;
		text-align: center;
	}

</style>

<template>
	<div :style="{height:height+'px'}" class="ct">
			<div style="padding-top: 50%;">
			<div class="title">买票票</div>
			
	  <div class="login">
		  <el-form ref="form" :model="form" >
	<el-form-item label="请输入账号"><el-input style="width: 250px;" placeholder="请输入账号" v-model="form.account"clearable ></el-input></el-form-item>
	<el-form-item label="请输入密码"><el-input style="width: 250px;" placeholder="请输入密码" v-model="form.password" show-password></el-input></el-form-item>
	<el-button type="success" style="margin-left: %;" @click="toRegister">点击注册</el-button>
	<el-button type="success" style="margin-left: %;" @click="back">返回登陆</el-button>
	
	
	</el-form>
	  </div>
	  
	  
	  
	  <transition name="el-zoom-in-center">
		  <el-alert v-if="isSuccess" ref='fail'
		      title="注册成功!快去登陆吧!"
		      type="success"
		      effect="dark" style="position: absolute;bottom: 0;">
		    </el-alert>
		  
		  
		<el-alert v-if="isFail" ref='fail'
		    :title="info"
		    type="error"
		    effect="dark" style="position: absolute;bottom: 0;">
		  </el-alert>
		  </transition>
		  </div>
	  </div>
</template>

<script>
import {adduser} from  'network/login.js'

export default {
  name: 'Register',
  components: {
	
  },
  data(){
  	return{
  		form:{
  			account:'',
  			password:''
  		},
		info:'',
		height:'',
  		isSuccess:false,
  		isFail:false
  	}
  },
  methods:{
	  toRegister(){
		  if(!this.form.password||!this.form.account){
		  	this.isFail=true;
			this.info='账号或密码不能为空!';
		  	setTimeout(()=>{
		  		this.isFail=false;
		  	},3000)
		  } else{
			  adduser(this.form.account,this.form.password).then(res=>{          //增加用户API
				  console.log(res);
				  this.info='注册失败!'+res.info;     
				  if(res.success=='1'){
					  console.log('注册成功');
					  this.isSuccess=true;
					  setTimeout(()=>{
					  	this.isSuccess=false;
					  },3000)
				  }else{
					  this.isFail=true;
					  setTimeout(()=>{
					  	this.isFail=false;
					  },3000)
				  }
			  })
		  }
		  
		  
		  
		  
		  // console.log('注册成功');
		  // this.isSuccess=true;
		  // setTimeout(()=>{
		  // 	this.isSuccess=false;
		  // },3000)
	  },
	  back(){
		  this.$router.back();
	  }
  },
  mounted(){
	this.height=window.screen.height ;
	// adduser(654321,123456).then(res=>{
	// 	console.log(res);
	// })
	
  }
}
</script>

<style>
	.ct{
		background-color: antiquewhite;
		text-align: center;
	}

</style>

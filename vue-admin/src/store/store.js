import Vuex from 'vuex'
import Vue from 'vue'
import {getUserInfo} from 'network/login.js'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 9999123,
	token:'',
	quit:false,
	isSuccess:false,
	user:''
  },
  mutations: {
	  quitUser(state){
	  	state.user=null;
	  },
    increment (state) {
      state.count++
    },
	test(state,value){
		state.count=value;
	},
	setToken(state,token){
		state.token=token;
	},
	resetToken(state){
		state.token='';
	},
	changeQuit(state){
		state.quit=!state.quit;
	},
	changeSuccess(state){
		state.isSuccess=!state.isSuccess;
	},
	saveUser(state,user){
		state.user=user;
	}
  },
  actions:{
	   getUserInfo({commit},userid){
		   return new Promise((resolve,reject)=>{
			   getUserInfo(userid).then(res=>{
				   resolve(res);
			   })
		   })
		
		  // console.log(userid);
	  }
  }
})

export default store
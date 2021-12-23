import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store.js'
import{getToken,deleteCookie} from'../utils/cookie.js'
const whiteList=['/','/402','/502','/login']
Vue.use(VueRouter)
const  Login=()=>import ('views/Login/Login.vue') 
const  Home=()=>import ('views/Home/Home.vue') 
const  roleManage=()=>import ('components/roleManage/roleManage.vue') 
const  usersManage=()=>import ('components/usersManage/usersManage.vue') 
const movicesHot=()=>import ('components/movicesManage/movicesHot/movicesHot.vue')
const usersOrders=()=>import ('components/usersOrders/usersOrders.vue')
const routes = [
  {
    path:'',
    redirect:'/login'
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/roleManage',
    component:roleManage
  },
  {
    path:'/usersManage',
    component:usersManage
  },
  {
    path:'/movicesManage/movicesHot',
    component:movicesHot
  },
  {
    path:'/usersOrders',
    component:usersOrders
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



router.beforeEach((to, from, next) => {

  if(whiteList.indexOf(to.path)>=0){
	    console.log('hellllo12321312321321')
	  store.commit('resetToken');    //重置token为空
	  store.commit('quitUser');    //清除用户
	  deleteCookie();			//删除cookie
	  next();
	  return ;
  }else{
	  console.log(store.state.user);
	  // 从cookie中获取
	  if(!store.state.token){
	  		  console.log(getToken());
	  		  console.log(1111111111111111);
	  		  if(getToken()){
	  			  store.commit('setToken',getToken());  //Token存到vuex
	  		  }else{
	  			   console.log('用户认证丢失,请重新登陆');
	  			   alert('登陆状态失效，请重新登陆');
	  			  next('/');
	  			  return
	  		  }
	  }
	  
	  
	  
		if(store.state.token){
	  let getTokenInfo=JSON.parse(decodeURIComponent((escape(window.atob(store.state.token.split('.')[1])))));
	  console.log(getTokenInfo);
	  try{
	   store.dispatch('getUserInfo',getTokenInfo.userid).then((res)=>{
		   console.log(res);
		   console.log(to.path);
		   if(res.success){
			   if(res.data.role_id==3){
				   alert('没有权限登陆');
				   store.commit('resetToken');    //重置token为空
				   store.commit('quitUser');    //清除用户
				   deleteCookie();			//删除cookie
				   next('/');
				   return ;
			   }
			   	 store.commit('saveUser',res.data);  //把用户信息存在 vux
			   if(to.path=='/usersManage'|| to.path=='/roleManage'){
				   if(res.data.role_id==2){
					   alert('没有权限访问');
					   next('/home');
					   return ;
				   }
				   console.log(12321321312213)
			   }
			   next();
			 }else{
				 // store.commit('resetToken');    //重置token为空
				 alert('登陆状态失效，请重新登陆');
				 next('/')
			 }
	   })
	   }
	   catch(err){
		   console.log(123213);
		   // store.commit('resetToken');    //重置token为空
		   alert('登陆状态失效，请重新登陆');
		   console.log('用户信息异常,请重新登陆');
		   next('/');
	   } 
   }else{
	   console.log(123);
	   alert('登陆状态失效，请重新登陆');
	   next('/')
   }
  }  

})


export default router

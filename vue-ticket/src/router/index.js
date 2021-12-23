import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store.js'
import{getToken,deleteCookie} from'../utils/cookie.js'

Vue.use(VueRouter)
const whiteList=['/','/402','/502','/login','/register']
const Login=()=>import ('views/Login/Login.vue')
const Register=()=>import ('views/Register/Register.vue')
const Home=()=>import ('views/Home/Home.vue')
const Cinemas=()=>import ('views/Cinemas/Cinemas.vue')
const My=()=>import ('views/My/My.vue')
const Movice=()=>import('views/Movice/Movice.vue')
const CinemasDetail=()=>import('views/Cinemas/CinemasDetail/CinemasDetail.vue')
const Order=()=>import('views/Order/Order.vue')
const MyOrder=()=>import('views/My/Myorders/Myorders.vue')
const routes=[
{
  path:'',
  redirect:'/login'
},
{
  path:'/home',
  component:Home

},
{
  path:'/cinemas',
  component:Cinemas

},
{
  path:'/my',
  component:My

},
{
  path:'/login',
  component:Login
},
{
  path:'/register',
  component:Register
},
{
  path:'/moviceDetail/:id',
  component:Movice
},
{
  path:'/cinemasDetail/:id',
  component:CinemasDetail
},
{
  path:'/order/:index',
  component:Order
},
{
  path:'/myorders',
  component:MyOrder
}

]


const router=new VueRouter(
 {
   mode:'history',
   routes
 }
)

router.beforeEach((to, from, next) => {
  store.commit('test',10);
  console.log(store.state.count)
    console.log(to.path)
  if(whiteList.indexOf(to.path)>=0){
	  deleteCookie();			//删除cookie
	  store.commit('resetToken');    //重置token为空
	  next();
	   return
  }else{
	  // 从cookie中获取
	  if(!store.state.token){
		  console.log(getToken());
		  console.log(1111111111111111);
		  if(getToken()){
			  store.commit('setToken',getToken());  //Token存到vuex
			  console.log(store.state.token);
			  console.log(store.state.token.split(';')[1])
		  }else{
			   console.log('用户认证丢失,请重新登陆');
			   alert('登陆状态失效，请重新登陆');
			  next('/');
			  return
		  }
	  }
	  let getTokenInfo=JSON.parse(decodeURIComponent((escape(window.atob(store.state.token.split('.')[1])))));
	  console.log(getTokenInfo);
	  try{
	   store.dispatch('getUserInfo',getTokenInfo.userid).then((res)=>{
		   console.log(res);
		   if(res.success){
			 store.commit('saveUser',res);			//把用户信息保存至Vux
			 console.log(store.state.user);
			 if(res.data.role_id!==1){                 //验证是不是普通用户
				 next();
				 return
			 }else{
				 deleteCookie();			//删除cookie
				 store.commit('resetToken');    //重置token为空
				 alert('您是管理员，请登录后台管理系统');
				 store.commit('changeSuccess');
				 console.log(store.state.isSuccess);
				 next('/')
				 return
			 }
			 }else{
				 // store.commit('resetToken');    //重置token为空
				 alert('登陆状态失效，请重新登陆');
				 next('/')
				 return
			 }
	   })
	   }
	   catch(err){
		   // store.commit('resetToken');    //重置token为空
		   alert('登陆状态失效，请重新登陆');
		   console.log('用户信息异常,请重新登陆');
		   next('/');
		   return
	   }
  }
})

export default router

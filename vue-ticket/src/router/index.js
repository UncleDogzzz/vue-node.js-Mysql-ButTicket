import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const Login=()=>import ('views/Login/Login.vue')
const Register=()=>import ('views/Register/Register.vue')
const Home=()=>import ('views/Home/Home.vue')
const Cinemas=()=>import ('views/Cinemas/Cinemas.vue')
const My=()=>import ('views/My/My.vue')
const Movice=()=>import('views/Movice/Movice.vue')


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
}

]


const router=new VueRouter(
 {
   mode:'history',
   routes
 }
)

export default router

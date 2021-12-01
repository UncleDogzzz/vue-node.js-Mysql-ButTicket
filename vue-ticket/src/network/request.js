import axios from 'axios'
export function request(config){
  //创建axiois实例
  const instance=axios.create({
  baseURL: "http://localhost:3000",
  timeout:10000
  })

  //设置拦截器
  instance.interceptors.request.use(config=>{
    return config
  },err=>{
    console.log(err)
  })

 instance.interceptors.response.use(res=>{
   return res.data
 },err=>{
   console.log(err)
 })


  //返回实例

  return instance(config)
}

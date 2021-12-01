<template>
	<div>
		<!-- 提示框 -->
		<transition name="el-zoom-in-center">
			  <el-alert v-if="isSuccess"
			      title="登陆成功,欢迎回来!"
			      type="success"
			      effect="dark" style="position: absolute;top: 0;z-index: 999;">
			    </el-alert>
				</transition>

		<div class="block">
		    <el-carousel height="465px" width='100%'  trigger="hover" arrow="always" >
		      <el-carousel-item v-for="item in items" :key="item.id" @click.native='ToMoviceDetail(item.id)'>
		        <!-- <h3 class="small">{{ item }}</h3> -->
				<img :src="item.img" class="imgg">
		      </el-carousel-item>
		    </el-carousel>
		  </div>
		  
		  
		  <div class="title_t"  >
			  <div class="line_flag"></div>
			  <span>正在上映</span>
		  </div>
		  
		  <div v-for="(item,index) in items" :key="item.id" :test='item.id'
		  @click=ToMoviceDetail(item.id) :id='item.id' :style="{marginBottom:(index==items.length-1?'57px':'0px')}"  >
			  <div class="item">
				  <div class="item_left">
					  <img  :src="item.img" style="display: block;
width: 65px;
height: 95px;"/>
				  </div>
				  <div class="item_middle">
					  <div><span class="title" style="color: #333;font-size: 16px;font-weight: 800;text-align: center;">{{item.name}}</span></div>
					   <div><span class="sub_title" style="color: #666;margin: 2px 0px;font-size: 14px;opacity: 1">{{item.showInfo}}</span></div>
					   <div><span class="actor" style="color: #666;margin: 2px 0px;font-size: 14px;opacity: 1">{{item.star}}</span></div>
				  </div>
				   <div class="item_right">
				                  <div><span class="score">{{item.score}}分</span></div>
				                  <div ><span class="action">购票</span></div>
				     </div>
				  
				  
			  </div>
		  </div>
		  
		  
		
		
		<!-- 底部tabbar -->
		<main-tab-bar></main-tab-bar>
	</div>
	
</template>

<script>
	import MainTabBar from 'components/MainTabBar/MainTabBar.vue'
	import{getMovieOnInfoList} from 'network/index.js'
	export default{
		name:'Home',
		data(){
			return{
				isSuccess:true,
				img:[],
				items:[]
			}
		},
		components:{
			MainTabBar
		},
		methods:{
			ToMoviceDetail(id){
				console.log(1)
				console.log(id)
				this.$router.push('/moviceDetail/'+id);
			},

		},
		activated() {
			getMovieOnInfoList().then(res=>{
				console.log(res);
				this.items=res;
				for(var i in res){
					this.img.push(res[i].img)
				}
			})
		},
		mounted(){

			getMovieOnInfoList().then(res=>{
				console.log(res);
				this.items=res;
				for(var i in res){
					this.img.push(res[i].img)
				}
			})
			
			
			setTimeout(()=>{
				this.isSuccess=false;
			},3000)
		}
	}
</script>

<style>
	.el-carousel__item h3 {
	    color: #475669;
	    font-size: 142px;
	    opacity: 0.75;
	    line-height: 150px;
	    margin: 0;
	  }
	  .imgg{
		  width: 100%;
		  height: 100%;
	  }
	
.el-carousel__button {
    display: block;
    opacity: .48;
    width: 12px;
    height: 12px;
    background-color: #FFF;
    border: 16px;
    outline: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: .3s;
    border-radius: 15px;
	}
	  
	  .title_t{
		  display: flex;
		      align-items: center;
		      position: relative;
		      padding: 10px 10px 10px 12px;
		      font-size: 15px;
		      color: #656565;
			  background-color: #f2f2f2;
	  }
	  .title_t span{
		margin-left: 10px;
    line-height: 18px;
	  }
	  .line_flag {
	      width: 3px;
	      height: 100%;
	      height: 18px;
	      display: inline-block;
	      background-color: #09bb07;
	  }
	  
	  .item {
	      padding: 10px;
	      background-color: #fff;
	      color: #787878;
	      border-top: 1px solid #eaeaea;
	      border-bottom: 1px solid #eaeaea;
		  display: flex;
	  }
	  .item img {
	      display: block;
	      width: 65px;
	      height: 95px;
	  }
	  .item_middle {
	      flex: 1;
	      margin-left: 10px;
	      padding-top: 5px;
	      overflow: hidden;
	  }
	  
	  .item_middle .title {
	      font-size: 16px;
	      color: #333;
	  }
	  .item_middle .sub_title {
	      font-size: 14px;
	      color: #666;
	      margin: 2px 0px;
	  }
	  
	  .item_middle .actor {
	      font-size: 14px;
	      color: #666;
	      margin: 2px 0px;
	  }
	  .item_right .score {
	      font-size: 12px;
	      color: #cf616a;
	  }
	  
	  .item_right .action {
	      margin-top: 30px;
	      border: 1px solid #29cc6d;
	      border-radius: 2px;
	      color: #29cc6d;
	      display: inline-block;
	      padding: 2px 4px;
	      font-size: 12px;
	      line-height: 16px;
	      text-align: center;
	  }
</style>

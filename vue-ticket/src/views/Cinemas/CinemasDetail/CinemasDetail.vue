<template>
	<div>
		 <!--  //导航栏 -->
		<nav-bar class='home-nav1'>
			<!-- <el-button round icon="el-icon-back" @click.native='black()' slot='left'>返回</el-button> -->
			<i class="el-icon-back" slot='left' @click='black()' ></i>
			<div slot='center'> 影院档期 </div> 
			</nav-bar>              
				
		<!-- 地图栏 -->
	<div class='cinema-info'>
	    <div class='info-box'>
	      <div class='title line-ellipsis' v-if="items.length!==0">{{items[0].cinema.name}}</div>
	      <div class='location' v-if="items.length!==0">{{items[0].cinema.addr}}</div>
	    </div>
	    <div  class='location-icon' >
	      <img src='~assets/img/location.png' />
	      <div>地图</div>
	    </div>
	  </div>
	  <!-- 轮播图 -->
	  <div class="swiper-container"  v-if="lunbo.length!==0">
	  <div class='post-bg-mask'></div>
	  <el-carousel :interval="0" type="card" height="220px" trigger="click"   @change='eee' arrow="never">
	      <el-carousel-item v-for="item in lunbo" :key="item.index" @click.native='changeCurrentItem(item)' >
	        <img :src="item.movicedetail.img" class="immm" />
	      </el-carousel-item>
	    </el-carousel>
	  </div>
	  <!-- 标题 -->
	  <div v-if="currentItem">
	      <div class='movie-info' >         
	        <div class='movie-title line-ellipsis'>
	          <span class='title11' style="color: black;">{{currentItem.movicedetail.name}} </span>
	          <span class='grade'>
	            
	          <span >{{currentItem.movicedetail.score}} <span class='small'>分</span></span>
	          </span>
	        </div>
	        <div class='movie-desc line-ellipsis'>{{currentItem.movicedetail.star}} </div>
	      </div>
	    </div>
	  
	  <!-- 时间 -->
	  <div class="tabbar">
	  <div>
	      <div class='day action' >今天12月21日
		  </div>
	  </div>
	  </div>
	  
	  <!-- 档期 -->
	  <div v-if="currentItems.length!==0">
		  <div v-for='item in currentItems' @click="ToBuyTicket(item.index)">
				 <div class='item123'>
				
				        <div class='time-block box'>
				          <div class='begin'>{{item.time}}</div>
				          <div class='end'> 散场</div>
				        </div>
				
				        <div class='info-block box'>
				          <div class="lan line-ellipsis" style="font-size: 13px;">国语 2D</div>
				          <div class="hall line-ellipsis"  style="font-size: 13px;color: #999;">2号厅</div>
				        </div>
				
				        <div class='price box'>
				          <div class='price-box line-ellipsis'>
				            <div class="sellPr">
				              <span class="stonefont">{{item.price}}</span>
				              <span class="d">元</span>
				            </div>
				            <div class="vipPrice" >
				              <span class="icon">折扣卡</span>
				              <span class="num">27</span>
				            </div>
				          </div>
				          <div class='discount line-ellipsis' >折扣卡首单特惠</div>
				        </div>
				
				        <div class='button-block'>
				          <div class='button' @click="ToBuyTicket(item.index)">购票</div>
				        </div>
				
				      </div>
		  
		 </div> 
	  </div>
		
	  
	</div>
</template>

<script>
	import {getCinemaDetailById} from 'network/cinemas.js'
	import NavBar from 'components/navbar/NavBar.vue'
	export default{
		name:'CinemasDetail',
		components:{
			NavBar
		},
		data(){
			return{
				CinemaId:'',
				items:[],
				lunbo:[],
				img:[],
				currentItem:'',
				currentItems:[]
			}
		},
		methods:{
			eee(i,h){
				console.log(i);
			},
			changeCurrentItem(item){
				this.currentItems=[];
				this.currentItem=item;
				console.log(item.moviceId);
				for(var i in this.items){
					console.log(this.items[i])
					if(this.items[i].moviceId==item.moviceId){
						this.currentItems.push(this.items[i]);
					}
				}
				console.log(this.currentItems);
			},
			black(){
				console.log(1123);
				this.$router.back();
			},
			ToBuyTicket(index){
				this.$router.push('/order/'+index);
			}
		},
		mounted() {
			console.log(1)
			console.log(this.$route.params.id)
			this.CinemaId=this.$route.params.id;
			getCinemaDetailById(this.CinemaId).then(res=>{
				// console.log(res[0].seat);
				// var s=JSON.parse(res[0].seat)
				// console.log(s.A);]c
				console.log(res);
			for(var k in res){
					res[k].seat=JSON.parse(res[k].seat);
					this.img.push(res[k].movicedetail.img);
				}
				console.log(res);
				console.log(this.img);
				this.items=res;
				// this.lunbo=res;
				for(var k in res){
					this.lunbo.push(res[k]);
				}
				console.log(this.items);
				
				for (var i = 0, len = this.lunbo.length; i < len; i++) {
				                        for (var j = i + 1, len = this.lunbo.length; j < len; j++) {
				                            if (this.lunbo[i].moviceId === this.lunbo[j].moviceId) {
				                                this.lunbo.splice(j, 1);
				                                j--;        // 每删除一个数j的值就减1
				                                len--;      // j值减小时len也要相应减1（减少循环次数，节省性能）   
				                                // console.log(j,len)
				
				                            }
				                        }
				                    }
									for(var k in this.items){
										console.log(this.items[k]);
									}
				this.currentItem=res[0];
				for(var i in this.items){
					console.log(this.items[i])
					if(this.items[i].moviceId==this.currentItem.moviceId){
						this.currentItems.push(this.items[i]);
					}
				}
			})
			
		}
		
	}
</script>

<style>
	.home-nav1{
	  background-color: /* #42bd56; */#0a9396;
	  color: black;
	  position: fixed;                   /* 设置导航栏位置为固定 */
	  top:0;
	  left: 0;
	  right: 0;
	  z-index: 9;
	  font-size: 19px;
	  /* line-height: 44px; */
	}
	.cinema-info {
	    display: flex;
	    justify-content: space-between;
	    align-items: center;
	    padding: 20px;
	    padding-right: 0;
	    background: #fff;
		margin-top: 40px;
	  }
	   .cinema-info .info-box {
	     width: 472px;
	    }
		.cinema-info .title {
		    font-size: 17px;
		    /* line-height: 48px; */
		    color: #333;
			text-align: left;
		  }
		  
		  .cinema-info .location {
		      margin-top: 9px;
		      font-size: 16px;
		      /* line-height: px; */
		      color: #999;
		    }
			.cinema-info .location-icon {
			    display: flex;
			    flex-direction: column;
			    justify-content: center;
			    align-items: center;
			    width: 140px;
			    height: 75px;
			    border-left: 1px solid #d8d8d8;
			    text-align: center;
				font-size: 10px;
			  }
			  .location-icon img{
				  width: 15px;
				  height: 15px;
				  margin-bottom: 10px;
			  }
			  .swiper-container {
			      position: relative;
			      width: 100%;
			      overflow: hidden;
			    }
			   .post-bg-mask {
			      position: absolute;
			      top: 0;
			      left: 0;
			      width: 100%;
			      height: 100%;
			      background-color: #40454d;
			      opacity: 0.55;
			    }
			  
			
				.el-carousel__item .immm {
				  width: 221px;
				  height: 246px;
				  }
				  .title11{
					  font-size: 15px;
				  }
				  
				  
				   .movie-info {
				      padding: 15px 30px;
				      text-align: center;
				      border-bottom: 1px solid #e6e6e6;
				    }
					/* .cinema-info .title {
					    font-size: 30px;
					    line-height: 48px;
					    color: #333;
					  } */
			.grade {
			    color: #ffb400;
			    font-size: 15px;
			  }
			   .small {
			      font-size: 9px;
			    }
				 .movie-desc {
				    height: 37px;
				    margin-top: 2px;
				    line-height: 37px;
				    font-size: 13px;
				    color: #999;
				  }
				  
				  
				  .tabbar{
				  
				      font-size: 13px;
				      z-index: 999;
				      top: 0px;
				      width: 100%;
				      background-color: #ffffff;
				    }
					
					.day {
					    display: inline-block;
					    height: 31px;
					    width: 30%;
					    line-height: 27px;
					    text-align: center;
					    box-sizing: border-box;
					    margin: 0 10px;
					    font-size: 13px;
					    /* color: #333; */
						color: #ef4238;
						border-bottom: 2px solid #ef4238;
					  }
					  .active {
					      color: #ef4238;
					      border-bottom: 2px solid #ef4238;
					    }
						
						
						 .item123 {
						    display: flex;
						    height: 45px;
						    padding: 14px 4px 9px 0;
						    margin: 0 0 0 13px;
						    border-bottom: 1px solid #e6e6e6;
						    color: #333;
						  }
						  
						  .begin {
						      line-height: 1;
						  font-size: 18px;
						      color: #333;
						      white-space: nowrap;
						    }
							.end {
							    margin-left: 1px;
							    color: #999;
							    font-size: 13px;
							    white-space: nowrap;
							  }
							  
							  .box {
							      display: flex;
							      height: 45px;
							      flex-direction: column;
							      justify-content: space-between;
							    }
								.info-block {
								    margin-left: 18px;
								    width: 118px;
								    overflow-x: hidden;
								   height: 45px;
								}
								
								.price {
								    width: 260px;
								    margin-left: 20px;
								}
								.sellPr{
									font-size: 15px;
									color: red;
									margin-right: 5px;
								}
								
								.price-box {
								    display: flex;
								    height: 40px;
								    align-items: flex-end;
									margin-bottom: 13px;
								}
								.d{
									font-size: 10px;
								}
								
								.vipPrice {
								   height: 13px;
								   line-height: 13px;
								   margin-top: 1px;
								   border: 1px solid #ff9000;
								   border-radius: 2px;
								   font-size: 11px;
								}
								.vipPrice .icon {
								    display: inline-block;
								    font-size: 11px;
								    padding: 0 2px;
								    color: #fff;
								    background-color: #f90;
								}
								.vipPrice .num {
								    display: inline-block;
								 font-size: 11px;
								    padding: 0 2px;
								    color: #f90;
								    background-color: #fff;
								}
								.discount {
								    color: #999;
								    font-size: 13px;
								}
								.button-block {
								    display: flex;
								    align-items: center;
								    margin-left: 34px;
								}
								.button {
								   width: 50px;
								   height: 30px;
								   line-height: 30px;
								   text-align: center;
								   box-sizing: border-box;
								   background-color: #f03d37;
								   color: #fff;
								   border-radius: 8px;
								   white-space: nowrap;
								   font-size: 14px;
								   border: none;
								}

</style>

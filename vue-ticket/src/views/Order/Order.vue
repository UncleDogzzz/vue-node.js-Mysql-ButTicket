<template>
	<div>
		<!-- <el-button round icon="el-icon-back" @click.native='back()'k>返回</el-button> -->
		<!--  //导航栏 -->
		<nav-bar class='home-nav1'>
			<!-- <el-button round icon="el-icon-back" @click.native='black()' slot='left'>返回</el-button> -->
			<i class="el-icon-back" slot='left' @click='back()' ></i>
			<div slot='center'> 订单 </div> 
			</nav-bar>   
		
		<div class='container' v-if="item" style="margin-top: 44px;">
		<img :src="item.movicedetail.img" />
		<div class='section'>
		  <div class='movie-box123'>
		    <div class='movie-name'>{{item.movicedetail.name}}</div>
		    <div class='watch-time'>{{item.time}}</div>
		    <div>{{item.cinema.addr}}</div>
		   <div class="select" v-if="rows">
		    选座：<el-select v-model="rowsValue" placeholder="请选择第几排"   style="width: 90px;" >
    <el-option
      v-for="item in rows"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  
  <el-select v-model="colValue1" placeholder="请选择座位号"   style="width: 90px;margin-left: 20px;"  >
    <el-option
      v-for="item in cols"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  
  </div>
		  </div>
		  <div class='price-box'>
		    <div>票价</div>
		    <div class='server'>含服务费3元/张
		      <span class='price-num'>{{item.price}}<span class='yuan'>元</span></span>
		    </div>
		  </div>
		</div>
		</div>
		
		
		
		
		
		<el-button type="warning" round style="width: 100%;" @click.native='pay()'>确认支付</el-button>
		
		
		<transition name="el-zoom-in-center">
		<el-result icon="success" title="购票成功!" subTitle="可在个人中心查看订单详情" v-show='isNone'>
		      <template slot="extra">
		        <el-button type="primary" size="medium" @click.native='back()'>返回</el-button>
		      </template>
		    </el-result>
		</transition>
		
	</div>
</template>

<script>
	import{getCinemaDetailByIndex} from 'network/cinemas.js'
	import{createOrders} from 'network/user.js'
	import NavBar from 'components/navbar/NavBar.vue'
	export default{
		name:'Order',
		components:{
			NavBar
		},
		methods:{
			pay(){
				console.log(this.$route.params);
				console.log(123123)
				var row=this.rowsValue;
				console.log(this.rowsValue);
				console.log(this.colValue1);
				var seat={'row':this.rowsValue,'cul':this.colValue1};
				console.log(seat);
				console.log(seat);
				createOrders(this.$store.state.user.data.id,this.$route.params.index,seat).then(res=>{
					console.log(res);
					if(res.success){
						this.isNone=true;
						//重新获取座位 这样就不用刷新
						getCinemaDetailByIndex(this.index).then(res=>{
							console.log(res);
							res.seat=JSON.parse(res.seat);
							this.item=res;
							this.rows.splice(0);
							// this.
							 for (var key in res.seat) {      
							
								console.log(key);
								this.rows.push({'value':key,'label':key})
							}
							this.seat=res.seat;
							console.log(this.rows);
						})
						
						
						
						
						setTimeout(()=>{
							this.isNone=false;
						},2000)
					}else{
						this.$message({
						  type: 'error',
						  message: res.info
						});
					}
				})

			},
			back(){
				this.$router.back();
			}
		},
		watch:{
			rowsValue(newValue){
				var index=1;
				console.log(newValue);
				this.cols=[];
				console.log(this.seat[newValue]);
				for(var i in this.seat[newValue]){
					if(!this.seat[newValue][i]){
						this.cols.push({'value':index,'label':index+'座'})
					}
					index++;
					// console.log(123)
				}
				console.log(this.cols);
			}
		},
		data(){
			return{
				isNone:false,
				index:'',
				item:'',
				seat:'',
				rows: [],
				cols: [],
				rowsValue: '',
				colValue1:''
			}
		},
		mounted() {
			this.index=this.$route.params.index;
			console.log(this.index);
			getCinemaDetailByIndex(this.index).then(res=>{
				console.log(res);
				res.seat=JSON.parse(res.seat);
				this.item=res;
				// var index=1;
				 for (var key in res.seat) {      
				
					console.log(key);
					this.rows.push({'value':key,'label':key})
					// index++;
				}
				this.seat=res.seat;
				console.log(this.rows);
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
	.section {
	  margin-bottom: 20px;
	  font-size: 15px;
	  padding: 30px;
	  padding-right: 0;
	  background: #fff;
	  color: #999;
	}
	.select{
		color: black;
		font-size: 18px;
		margin-top: 17px;
	}
	.movie-box123 {
	  padding-bottom: 20px;
	  padding-right: 30px;
	  border-bottom: 1px solid #f0f0f0;
	  line-height: 1.5em;
	  font-size: 13px;
	  margin-bottom: 15px;
	}
	
	.movie-name {
	  color: #333;
	  font-size: 23px;
	}
	.watch-time {
	  color: #f03d37;
	  font-size: 17px;
	  margin-top: 6px;
	  margin-bottom: 6px;
	}
	.price-box {
	  display: flex;
	  justify-content: space-between;
	 /* padding-right: 30px;
	  padding-top: 30px; */
	}
	
	.server {
	  font-size: 15px;
	  color: #999;
	  margin-right: 13px;
	}
	
	.price-box .price-num {
	  color: #f03d37;
	  font-size: 15px;
	}
	.el-result {
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    flex-direction: column;
	    text-align: center;
	    box-sizing: border-box;
	    padding: 40px 30px;
	    position: absolute;
	    left: 0px;
	    top: 27%;
	    z-index: 9999;
	    right: 0;
	    background: white;
	    opacity: 0.9;
		}

</style>

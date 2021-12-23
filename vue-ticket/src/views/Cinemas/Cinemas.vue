<template>
	<div class="container">
		<nav-bar class='home-nav'><div slot='center'> 影院列表 </div> </nav-bar>       <!--  //导航栏 -->
		
		
		<div style="margin-top: 36px;">
		<div class="flex item" @click="toBuyTicket(item.id)" v-for="(item) in cinemas">
			<div class="flex_auto item_left">
				<div><span class="title">{{item.name}}</span></div>
				<div class="ttt"><span class="sub_title">{{item.addr}}</span></div>
				
				<div class='feature-tags'>
				      <span v-if="item.endorse==1" >退</span>
				      <span >改签</span>
				      <span class="text1">儿童厅</span>
					  <span class="text1">巨幕厅</span>
				      <span class='featrue' v-if="item.snack==1">小吃</span>
				      <span class='featrue'  v-if="item.vipTag==1">折扣卡</span>
				    </div>
				<div class="sss">
				          <span class='card'></span>
				        <span class="tag">{{item.vipInfo}}</span>
				        </div>
			</div>
		</div>
		</div>
		
		<main-tab-bar></main-tab-bar>
	</div>

</template>

<script>
	import NavBar from 'components/navbar/NavBar.vue'
	import MainTabBar from 'components/MainTabBar/MainTabBar.vue'
	import {getCinemasInfo} from 'network/cinemas.js'
	export default{
		name:'Cinemas',
		components:{
			MainTabBar,
			NavBar
		},
		methods:{
			toBuyTicket(id){
				console.log(id)
				this.$router.push('/cinemasDetail/'+id);
			}
		},
		data(){
			return{
				cinemas:[]
			}
		},
		mounted() {
			console.log(1);
			getCinemasInfo().then(res=>{
				console.log(res);
				this.cinemas.push(...res);
				console.log(this.cinemas)
			})
		}
	}
</script>

<style>
	.home-nav{
	  background-color: /* #42bd56; */#0a9396;
	  color: black;
	  position: fixed;                   /* 设置导航栏位置为固定 */
	  top:0;
	  left: 0;
	  right: 0;
	  z-index: 9;
	  font-size: 19px;
	}
	.flex{
	  font-size: 26rpx;
	  color: #777777;
	  display: flex;
	  top: 100rpx;
	  justify-content:space-around
	}
	.item {
	  padding: 10px;
	  background-color: #fff;
	  color: #787878;
	  border-top: 1px solid #eaeaea;
	  border-bottom: 1px solid #eaeaea;
	}
	.item_left {
	  flex: 1;
	  margin-left: 10px;
	  padding-top: 5px;
	  overflow: hidden;
	}
	.item_left .title {
	  font-size: 17px;
	  color: #333;
	}
	.ttt{
	  margin: 5px 0px;
	}
	.item_left .sub_title {
	  font-size: 14px;
	  color: #666;
	}
	.feature-tags {
	 width: 68%;
	}
	.feature-tags .text1{
	  display: inline-block;
	  border: 1px solid #cf616a;
	  color:  #cf616a;
	  padding: 0 6rpx;
	  height: 30rpx;
	  line-height: 30rpx;
	  border-radius: 4rpx;
	  font-size: 24rpx;
	  margin-right: 8rpx;
	}
	.feature-tags .featrue {
	  color: #f90;
	  border-color: #f90;
	}
	.feature-tags span {
	    display: inline-block;
	    border: 1px solid #589daf;
	    color: #589daf;
	    padding: 0 4px;
	    height: 19px;
	    line-height: 20px;
	   border-radius: 4px;
	  font-size: 10px;
	    margin-right: 8px;
		margin-top: 2px;
	}
	.sss{
	  margin-top: 9px;
	/*  background-color: #09BB07; */
	font-size: 11px;
	}
	.card{
		  display: inline-block;
		  width: 15px;
		  height: 12px;
		  margin-right: 6px;
		  z-index: -1;
		  background-size: contain;
		  background-repeat: no-repeat;
		  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAOCAIAAABGj2DjAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAEISURBVCiRjZJPSwJBHIaf34wpq2BKWJEdF/oIQd/GT+bn6eTFQ4eF6BARoSmam+6ft8MKxe4gzW2Y95l5n5kxSY8fxTQpVgdxcgzaNon9/cg7oAkYWINZHTRNCsBVk9ryeZthJ3BUlWwFa9z13VVks2UJLPfa5fzdNcx447ZrhgNmyzItJIUYb1xHdtExYNyzdabnrSr1XLynKtRgnBH5o0avZWeOYeeY2uU4I8BkJclGyUbAYUTct5etXnfKynpzF/QR5CXjrj1cupvIvP2DKcVbqqe1Ft8yU+2twvcmKMRir3WG8Wtyipl/ls4A8obMsdugXf8oacFXHkhXSQdMYt/EgsAk9sAPzO1zfdmq2tIAAAAASUVORK5CYII=');
	}
</style>

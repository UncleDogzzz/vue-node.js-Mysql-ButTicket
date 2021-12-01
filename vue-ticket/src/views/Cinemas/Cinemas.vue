<template>
	<div class="container">
		<div class="flex item" @click="test()">
			<div class="flex_auto item_left">
				<div><span class="title">诚丰影城（从化店）</span></div>
				<div class="ttt"><span class="sub_title">从化区埔街道红荔新村16栋</span></div>
				
				<div class='feature-tags'>
				      <span >退</span>
				      <span >改签</span>
				      <span class="text1">儿童厅</span>
					  <span class="text1">巨幕厅</span>
				      <span class='featrue'>小吃</span>
				      <span class='featrue'>折扣卡</span>
				    </div>
				<div class="sss">
				          <span class='card'></span>
				        <span class="tag">开卡特惠，首单1张最高立减3元</span>
				        </div>
				
				
			</div>
		</div>
		
		<main-tab-bar></main-tab-bar>
	</div>

</template>

<script>
	import MainTabBar from 'components/MainTabBar/MainTabBar.vue'
	export default{
		name:'Cinemas',
		components:{
			MainTabBar
		},
		methods:{
			test(){
				console.log(1)
			}
		},
		mounted() {
			console.log(1)
		}
	}
</script>

<style>
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
	  margin-top: 10rpx;
	/*  background-color: #09BB07; */
	}
</style>

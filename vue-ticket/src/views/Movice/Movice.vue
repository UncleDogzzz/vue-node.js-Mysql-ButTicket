<template>
<div>
	<nav-bar class='home-nav1'>
		<!-- <el-button round icon="el-icon-back" @click.native='black()' slot='left'>返回</el-button> -->
		<i class="el-icon-back" slot='left' @click='back()' ></i>
		<div slot='center'> 电影详情 </div> 
		</nav-bar>  
	
	
	
<div class="container" style="background-color: #664D29;margin-top: 43px;" >

<!-- 标题栏 -->
<div class="flex" style="padding: 10px;
    color: #787878;
    border-top: 1px solid #eaeaea;" >
            <div class="item_left1">
                <img :src="movice.img"/>
            </div>
            <div class="flex_auto item_middle">
                <div class="div-title"><span class="title" style="font-size: 22px;
color: #ffffff;">{{movice.name}}</span></div>
                <div><span class="sub_title" style="font-size: 15px;
color: #ffffff;
margin: 2px 0px;
opacity: .6;">{{movice.ename}}</span></div>
                <div><span class="actor" style="font-size: 11px;
color: #ffffff;
margin: 2px 0px;
opacity: .6;">{{movice.cat}}</span></div>
                <div><span class="actor" style="font-size: 11px;
color: #ffffff;
margin: 2px 0px;
opacity: .6;">{{movice.star}}</span></div>
                <div><span class="actor" style="font-size: 11px;
color: #ffffff;
margin: 2px 0px;
opacity: .6;">{{movice.pubDesc}}</span></div>
            </div>
            <div class="item_right" >
				<!-- <div @click="back()"><span class="action1" style="margin-left: 11px;
margin-top: 0px;">返回</span></div> -->
                <div @click="ToBuyTicket"><span class="action">去买票</span></div>
            </div>
        </div>
		
		
	<!-- 评分 -->	
<div class="movice_score" >
		        <div >
		            <span class="movice_score_score">评分</span>
		            <span class="wish">{{movice.wish}}人想看</span>
		            <span class="watched">{{movice.watched}}人看过</span>
		            <span class="watched1" >查看评论</span>
		        </div>
		        <div class="left-section">
		            <div class="left-section_left">
		                <span class="score_text">{{movice.score}}</span>
		                <div class="people-grade"><span>{{movice.snum}}人评</span></div>
		            </div>
		 
		            <div class="left-section_right">
		                <div class="stars-percent-bar">
		                    <div class="stars">
		                        <img src="../../assets/img/white-star.png"></img>
		                        <img src="../../assets/img/white-star.png"></img>
		                        <img src="../../assets/img/white-star.png"></img>
		                        <img src="../../assets/img/white-star.png"></img>
		                        <img src="../../assets/img/white-star.png"></img>
		                        <div class="bar">
		                            <div class="percent" style="width: 80%"></div>
		                        </div>
		                    </div>
		                </div>
		
		                <div class="stars-percent-bar">
		                    <div class="stars">
		                        <img src="../../assets/img/white-star.png"></img>
		                        <img src="../../assets/img/white-star.png"></img>
		                        <img src="../../assets/img/white-star.png"></img>
		                        <img src="../../assets/img/white-star.png"></img>
		                        <div class="bar">
		                            <div class="percent" style="width: 10%"></div>
		                        </div>
		                    </div>
		                </div>
		
		                <div class="stars-percent-bar">
		                    <div class="stars">
		                        <img src="../../assets/img/white-star.png"></img>
		                        <img src="../../assets/img/white-star.png"></img>
		                        <img src="../../assets/img/white-star.png"></img>
		                        <div class="bar">
		                            <div class="percent" style="width: 5%"></div>
		                        </div>
		                    </div>
		                </div>
		
		
		                <div class="stars-percent-bar">
		                    <div class="stars">
		                        <img src="../../assets/img/white-star.png"></img>
		                        <img src="../../assets/img/white-star.png"></img>
		    
		                        <div class="bar">
		                            <div class="percent" style="width: 8%"></div>
		                        </div>
		                    </div>
		                </div>
		
		                <div class="stars-percent-bar">
		                    <div class="stars">
		                        <img src="../../assets/img/white-star.png"></img>
		                        <div class="bar">
		                            <div class="percent" style="width: 1%;"></div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        
		        </div>
		
		        <div class="awardBottom">     
		            <div class="awards-box">
		                <div class="show-middle">
		                    <div class="avatars">
		                        <img src="../../assets/img/goods.png"></img>
		                        <div class="content"><span class="awardDetail">好评如潮！</span></div>
		                    </div>
		                </div>
		            </div>
		        </div>
		
		    </div>

		
	<!-- 简介 -->
<div class="brief-introduction"> 
	        <div class="title1"><span>简介</span> </div>
	        <div class="content1"><span class="normal-line line-clamp">{{movice.introduction}}</span>
	        </div>
	    </div>	
		
		
<!-- 视频 -->

<div class="brief-introduction"> 
        <div class="title1">
            <span>视频</span>
        </div>

        <div>
            <video :src="movice.video" controls></video>
        </div>


    </div>		

		
		
		



</div>
</div>
</template>

<script>
		import {getMovieDetail} from 'network/index.js'
		import NavBar from 'components/navbar/NavBar.vue'
		
	export default{
		name:'Movice',
		components:{
			NavBar
		},
		data(){
			return{
				movice:''
			}
		},
		methods:{
			back(){
				this.$router.back()
			},
			ToBuyTicket(){
				this.$router.push('/cinemas')
			}
		},
		mounted(){
			console.log(this.$route.params.id);
			getMovieDetail(this.$route.params.id).then(res=>{
				console.log(res);
				this.movice=res;
				
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
	  line-height: 44px;
	}
	.container{
		font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
		    display: flex;
		    flex-direction: column;
		    justify-content: space-between;
		    box-sizing: border-box;
	}
	div{
		display: block;
	}
	.item_left1 img{
		display: block;
		    width: 95px;
		    height: 120px;
	}
	.flex{
		display: flex;
	}
	.item {
	    padding: 10px;
	    color: #787878;
	    border-top: 1px solid #eaeaea;
	}
	.item_middle {
	    flex: 1;
	    margin-left: 10px;
	    padding-top: 0px;
	    overflow: hidden;
	}
	.div-title{
	    margin-bottom: 25rpx;
	}

.item_middle .title {
    font-size: 20px;
    color:#ffffff;

}
.item_middle .sub_title {
    font-size: 15px;
    color: #ffffff;
    margin: 2px 0px;
    opacity: .6
}
.item_middle .actor {
    font-size: 11px;
    color: #ffffff;
    margin: 2px 0px;
    opacity: .6
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
.item_right .action1 {
    margin-top: 30px;
    border: 1px solid #ffffff;
    border-radius: 2px;
    color: #ffffff;
    display: inline-block;
    padding: 2px 4px;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
}

.movice_score{
    color: #bbb2a5;
    margin-top: 22rpx;
    background-color:rgba(0,0,0,.18);
    border-radius: 15rpx;
    width: 95%;
    margin-left: 15rpx;
    font-size: 25rpx;

}
.movice_score_score{
    margin-left: 10px;
    color: #ffffff;
	font-size: 12px;

}
.wish{
    margin-left: 39px;
    margin-right: 20px;
	font-size: 12px;
}
.watched{
    margin-right: 12px;
		font-size: 12px;
}
.watched1{
	font-size: 12px;
	
}
.left-section{
    display: flex;
justify-content: center;
align-items: center;
flex-grow: 1;
margin-top: 7px;

}
.left-section_left{
    display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
margin-right: 8px;
margin-left: 82px;
}
.score_text{
font-weight: 600;
font-family: MaoYanHeiTi-H-H;
font-size: 38px;
color: #ffb400;
line-height: 38px;
letter-spacing: 0;
text-align: center;
}
.people-grade{
    font-weight: 400;
opacity: .6;
font-family: PingFangSC-Regular;
font-size: 45rpx;
display: flex;
word-break: keep-all;
color: hsla(0,0%,100%,.4);
letter-spacing: 0;
text-align: center;
line-height:  50rpx;
}
.stars-percent-bar{
    display: flex;
align-items: center;
margin-bottom: 1rpx;
}
.stars{
    display: flex;
justify-content: flex-end;
align-items: center;
width: 142px;
}
.bar{
width: 90px;
height: 8px;
background-color: hsla(0,0%,100%,.06);
border-radius: .02rem;
margin-left: 12rpx;
}
.stars img{
    height: 10px;
width: 10px;
margin-left: .026rem;
opacity: .4;
}
.avatars img{
	width: 15px;
	    height: 15px;
	    margin-right: 12px;
	    display: inline-block;
		margin-top: 29px;
}
.avatars .content{
    display: inline-block;
width: 100%;
flex-wrap: wrap;
justify-content: space-between;
overflow: hidden;
/* line-height: 12rpx; */
height: 30rpx;
}
.awardBottom{
    margin-top: 5rpx;
background: rgba(0,0,0,.12);
border-radius: 15rpx;
padding: 0 .1rem 0 .22rem;
margin-left: 25rpx;
height: 26px;
margin-top: 25rpx;
margin-bottom: 25rpx;

}
.awards-box{
    position: relative;
height: 50rpx;
white-space: nowrap;
}
.show-middle{
    position: absolute;
top: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
font-weight: 400;
font-family: PingFangSC-Regular;
color: #fffadf;
letter-spacing: 0;
text-shadow: 0 1px 3px rgba(166,97,48,.5);
opacity: 1;
visibility: visible;
transform: translateY(0);
}
.avatars{
overflow: hidden;
width: 100%;
}
.awardDetail{
    white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
font-size: 25rpx;
}
.percent{

    background: hsla(0,0%,100%,.3);
border-radius: .02rem;
transition: width 1.5s;
height: 100%;
}	
.brief-introduction{
    position: relative;
    margin-top: 35rpx;
	font-size: 14px;

}
.title1{
    display: flex;
justify-content: space-between;
align-items: center;
color: white;
font-size: 29rpx;
margin-bottom: 20rpx;
}
.content1{
font-size: 29rpx;
line-height:23px ;
margin-left: 5px;
color: white;
margin-right: 5px;
}
.normal-line line-clamp{
    display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
text-overflow: ellipsis;
}
.normal-line line-clamp{
    display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
text-overflow: ellipsis;
}
.brief-introduction{
    position: relative;
    margin-top: 10px;

}
.title1{
    display: flex;
justify-content: space-between;
align-items: center;
color: white;
font-size: 29rpx;
margin-bottom: 7px;
}
.title1 span{
    margin-left: 20rpx;
}
video{
	display: inline-block;
	    height: 225px;
	    line-height: 0;
	    overflow: hidden;
	    position: relative;
	    width: 350px;
	    z-index: 0;
}
</style>

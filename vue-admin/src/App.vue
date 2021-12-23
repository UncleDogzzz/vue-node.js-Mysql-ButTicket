<template>
  <div id="app">
	  <!-- 导航栏 -->
	  <nav-bar @Topath='Topath1' v-if="$store.state.token"></nav-bar>        
    <router-view/>
  </div>
</template>

<script>
	import NavBar from'components/NavBar/NavBar.vue'
	export default{
		components:{
			NavBar
		},
		methods:{
			Topath1(url){
				console.log(url);
			}
		}
	}
</script>
<style>
	#app{
		display: flex;
	}

</style>

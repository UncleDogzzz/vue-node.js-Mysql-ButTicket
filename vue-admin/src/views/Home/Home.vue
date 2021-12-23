<template>
	<div class="home">
	<users-manage   v-if="$store.state.user.role_id==1"/>
	<movices-hot  v-else/>

	</div>
</template>

<script>
	import usersManage from'components/usersManage/usersManage.vue'
	import movicesHot from 'components/movicesManage/movicesHot/movicesHot.vue'
	export default{
		name:'Homes',
		methods:{
		
		},
		components:{
			usersManage,
			movicesHot
		},
		 data() {
		      return {
		        isCollapse: true
		      };
		    },
			mounted() {
				console.log(this.$store.state.user.role_id);
			}
	}
</script>

<style>
	.el-menu-vertical-demo:not(.el-menu--collapse) {
	    width: 200px;
	    min-height: 400px;
	  }
	  .home{
		  
	  }
</style>

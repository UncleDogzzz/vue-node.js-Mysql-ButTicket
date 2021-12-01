<template>
  <div class="tab-bar-item" @click="itemClick">

  <div v-if="!isActive"><slot name='item-icon'></slot></div>
   <div v-else><slot name='item-icon-active'></slot></div>
   <div :style='{color:ActiveColor}'><slot name='item-text'></slot></div>

  </div>

</template>

<script>

  export default{
    name:'TabBarItem',
    props:{
     path:String,
     isActiveColor:{
      type:String,
      default:'pink'
     }

    },
    computed:{
    isActive(){
     return this.$route.path.indexOf(this.path)!==-1
    },
    ActiveColor(){
     return this.isActive? this.isActiveColor:''
    }

    },



    methods:{
     itemClick(){
     this.$router.push(this.path);


     }

    }

  }
</script>

<style>

  .tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
  }

  .tab-bar-item img{
   width: 24px;
   height: 24px;
   margin-top: 3px;
   margin-bottom: 2px;
   vertical-align: middle;

  }




</style>

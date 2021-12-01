<template>

  <tab-bar>
   <tab-bar-item path='/home' isActiveColor='green'>
     <img src='~assets/img/tabbar/icon_normal.png' slot='item-icon'>
     <img src='~assets/img/tabbar/icon_pressed.png' slot='item-icon-active'>
     <div slot='item-text'>首页</div>

   </tab-bar-item>

  <tab-bar-item path='/cinemas' isActiveColor='green'>
    <img src='~assets/img/tabbar/icon_normal.png' slot='item-icon'>
    <img src='~assets/img/tabbar/icon_pressed.png' slot='item-icon-active'>
    <div slot='item-text'>影院</div>

  </tab-bar-item>


   <tab-bar-item path='/my' isActiveColor='green'>
     <img src='~assets/img/tabbar/icon_normal.png' slot='item-icon'>
     <img src='~assets/img/tabbar/icon_pressed.png' slot='item-icon-active'>
     <div slot='item-text'>我的</div>

   </tab-bar-item>


   </tab-bar>
</template>

<script>
  import TabBar from 'components/tabbar/TabBar.vue'
  import TabBarItem from 'components/tabbar/TabBarItem.vue'

  export default{
    name:'MainTabBar',
    components:{
      TabBar,
      TabBarItem

    }

  }


</script>

<style>
</style>

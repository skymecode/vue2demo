<template>
  <div id="app">
   
   <el-menu  class="el-menu-demo"  router="true" mode="horizontal">
      <el-menu-item index="/index" ><a  @click="goUser" target="_blank">主页</a></el-menu-item>
      <el-menu-item index="/content" >内容</el-menu-item>
    </el-menu>
  <router-view></router-view>
    
  </div>
  
</template>

<script>


export default {
  name: 'App',
  methods:{
    goUser(){
      this.$router.push({ path: '/' })
}}


}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

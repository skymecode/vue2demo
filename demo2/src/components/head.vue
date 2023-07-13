<template>
    <div>
    <el-tabs v-model="activeName"  @tab-click="handleClick">
        <el-tab-pane  label="公告栏"  name="first"><Note></Note></el-tab-pane>
        <el-tab-pane label="推荐列表" name="second"><Reco></Reco></el-tab-pane>
        <el-tab-pane label="我的认养" name="third"></el-tab-pane>
        <el-tab-pane label="收货地址" name="fourth"></el-tab-pane>
        <el-tab-pane label="交易明细" name="fifth"></el-tab-pane>
      </el-tabs>
    </div>
</template>
<script>
     import Note from './note.vue'
     import Reco from './reco.vue'
    export default{

        name:'Head',
        components: {
          Note,
          Reco
          
          
          
        },
        data(){
       return{
        activeName: 'first'

       }
        },
        methods: {
      handleClick() {
        this.$emit('tab-clicked', this.activeName);
      }
    }
    }

</script>
<style>

</style>
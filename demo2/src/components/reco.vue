<template>
  <el-row :gutter="20">
    <el-col :span="10" v-for="(a, index) in infoList" :key="a">
      <el-card class="el" :body-style="{ margin:'10px', padding: '0px' }">
        <img :src="a.cover" class="image">
        <div style="padding: 14px;">
          <span>{{a.name}}</span>
          <div class="bottom clearfix">
            <p class="time">价格:{{a.price}}</p>
            <el-button type="success" icon="el-icon-check">购买</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
  import axios from 'axios';
  let infoList;
  let infoForm = {
    name: '',
    cover: '',
    price: ''
  }
  let config1 = {
    method: 'get',
    url: 'http://mock.apifox.cn/m1/2862832-0-default/recommend',

  };
  import 'animate.css';
  export default {
    name: 'Reco',

    data() {
      return {
        config1,
        infoList
      }
    },
    mounted() {

      axios(this.config1)
        .then(response => (console.log(response.data.recommendList),
            this.infoList = response.data.recommendList, this.$message({
              message: '获取推荐列表成功',
              type: 'success'
            }))

        )
        .catch(function (error) { // 请求失败处理
          this.$message.error('获取失败!');
          console.log(error);
        });
    },
    methods: {


    }
  }

</script>
<style>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    margin-left: 25%;
   width: 50%;
   height: 1000px;
   
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .el-col-10 {
    width: 100%;

  }

  .el-col {
    margin-bottom: 20px;
  }
 
 

</style>

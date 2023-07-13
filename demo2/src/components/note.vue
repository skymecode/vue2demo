<template>
  <el-row :gutter="20">
    <el-col :span="10" v-for="(o, index) in infoList" :key="o" >
      <el-card :body-style="{ margin:'10px', padding: '0px' }">
        <h1>{{o.title}}</h1>
        <p>{{o.content}}</p>
        <div style="padding: 14px;">
         
          <div class="bottom clearfix">
            <time class="time">{{o.time}}</time>
           
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
    import axios from 'axios';
  let infoList;
  let infoForm={
    title:'',
    content:'',
    time:''
  }
  let config1 = {
    method: 'get',
    url: 'http://mock.apifox.cn/m1/2862832-0-default/getNotice',

  };
  export default {
    name: 'Note',

    data() {
      return {
        config1,
        currentDate: new Date(),
        infoList
      }
    },
    mounted(){
        
       axios(this.config1)
          .then(response => (console.log(response.data.noticeList),
              this.infoList = response.data.noticeList, this.$message({
                message: '获取公告成功',
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
    width: 100%;
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
  .el-col-10{
    width: 100%;

  }
  .el-col{
    margin-bottom: 20px;
  }

</style>

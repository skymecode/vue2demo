<template>
  <div>
    <div id="pageA">
      <!--:model=""  命名绑定的这个表单
          :rules=""  命名这个这个表单的规则
          label-width=""  表单的item的label字段的宽度，比如这里的“用户名”和“密码”呈现占有的宽度
          status-icon  输入完时，input框末尾的状态图标
          ref=""  命名这个dom节点-->
      <el-form :model="loginForm" :rules="loginRules" label-margin-bottom="5px" label-width="100px" status-icon
        ref="loginForm" size="medium" style=" margin-right: 70px;margin-top: 50px;">
        <!-- .trim 处理空格，这里为禁止输入空格 -->
        <el-form-item label="手机号" prop="userName" class="custom-form-item">
          <el-input style="width: 200px" v-model.trim="loginForm.userName" placeholder="请输入8-11个字符"></el-input>
        </el-form-item>

        <el-form-item label="验证码" prop="userPwd" class="custom-form-item">
          <el-input style="width: 200px;" type="password" v-model.trim="loginForm.userPwd" aria-autocomplete="off"
            placeholder="请输入您的密码"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="isLogin()">登录</el-button>
          <el-button @click="restForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>info:{{info.nickname}}</div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      // es5的用法
      // var validatePass = function (rule, value, callback) {
      //   if (/^[^@]*@[^@]*$/.test(value)) {
      //     callback();
      //   } else {
      //     callback(new Error("请按要求输入"));
      //   }
      // };
      //es6的用法
      var validatePass = (rule, value, callback) => {
        if (/^[^@]*@[^@]*$/.test(value)) { //有且只能出现一次@符号
          callback();
        } else {
          callback(new Error("请按要求输入"));
        }
      };

      let config1 = {
        method: 'post',
        url: 'http://mock.apifox.cn/m1/2862832-0-default/login',
        data: {
          phone: '',
          vcode: ''
        }

      };
      
      return {
        config1,
        loginForm: {
          userName: "",
          userPwd: "",
        },
        // required:会否必填   message：没有达到rules的msg  trigger：'blur'失去焦点时触发（用来配合msg触发后但没填显示msg）
        //pattern:使用正则验证   [^adgk]:查找给定集合外的任何字符  ^[^a]*a[^a]*$ 这个正则的意思是有且只能出现一次a
        loginRules: {
          userName: [{
            required: true,
            message: "请输入手机号"
          }, ],
          userPwd: [{
              required: true,
              message: "请输入密码"
            },
            // { validator: validatePass },
          ],
        },
        info:{
        nickname:'',
        phone:''
        }
      };
    },
    methods: {
      isLogin() {
        this.$refs["loginForm"].validate((valid) => {
          if (valid) {
            this.login();
          } else {
            this.$message.error('请按照要求输入内容！');
            return false;
          }
        });

      },
      login() {
        this.config1.phone = this.loginForm.userName
        this.config1.vcode = this.loginForm.userPwd
        
        this.$axios(this.config1)
          .then(response => ( console.log(response.data.userinfo),
            console.log(this.info),
            this.$router.push({ path: '/content' }),
           this.info.nickname = response.data.userinfo.nickname,this.$message({
          message: '登录成功',
          type: 'success'
        }))
           
          )
          .catch(function (error) { // 请求失败处理
            this.$message.error('登录失败!');
            console.log(error);
          });
      },
      restForm(loginForm) {
        this.$refs[loginForm].resetFields();
      },
    },

  }

</script>
<style>
  #pageA {
    width: 400px;
    /* 设置矩形框的宽度 */
    height: 300px;
    /* 设置矩形框的高度 */
    background-color: #f2f2f2;
    /* 设置矩形框的背景色 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

</style>

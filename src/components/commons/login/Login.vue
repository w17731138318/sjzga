<!-- 登录组件 -->
<template>
  <el-form :model="rulesForm" :rules="rules" ref="rulesForm" label-position="left" label-width="0px" class="login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="rulesForm.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="rulesForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit('rulesForm')" :loading="logining">登录</el-button>
      <el-button @click.native.prevent="handleReset('rulesForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import Vue from 'vue'
import store from 'store/Store'
import user from 'api/User'
    export default{
      data () {
        return {
          logining: false,
          rulesForm:{
            username:'',
            password:''
          },
          rules: {
            username: [
              { required: true, message: '请输入账号', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
              //{ validator: validaePass }
            ],
            password: [
              { required: true, message: '请输入密码', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
              //{ validator: validaePass2 }
            ]
          },
          checked: true
        }
      },
      methods: {
        // 重置表单
        handleReset(rulesForm) {
          this.$refs[rulesForm].resetFields();
        },
        // 提交表单
        handleSubmit(rulesForm) {
          this.$refs[rulesForm].validate((valid) => {
            // 验证表单
            if (valid) {
              // 验证成功 提交表单
              this.logining = true
              // if(user.Login(this.ruleForm)==0){
              if(0==0){
                // 返回成功 
                this.$router.push({ path: '/hello' });
              }else{
                // 提交失败

              }
              // 提交之后
              this.logining = false
            } else {
              // 验证失败
              return false
            }
          })
        }
      }
    }
</script>

<style lang="scss" scoped  type="text/css">
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>
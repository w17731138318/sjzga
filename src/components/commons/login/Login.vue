<!-- 登录组件 -->
<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple"><el-input size="small" placeholder="请输入内容"></el-input></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"><el-input size="small" placeholder="请输入内容"></el-input></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"><el-input size="small" placeholder="请输入内容"></el-input></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    
    <form @submit.prevent="validateSubmit">
      <div class="field">
        <!-- <label class="label">账号</label> -->
        <div class="control has-icons-left has-icons-right">
          <input class="input" type="text" placeholder="账号" v-model="user.username" name="username" v-validate="'required|min:3|max:10'" :class="{'input': true, 'is-danger': errors.has('username') }" >
          <span class="icon is-small is-left">
            <i class="fa fa-user"></i>
          </span>
          <span class="icon is-small is-right">
            <i v-show="!errors.has('username')" class="fa fa-check"></i>
            <i v-show="errors.has('username')" class="fa fa-warning"></i>
          </span>
        </div>
        <p v-show="errors.has('username')" class="help is-danger">账号填写错误</p>
      </div>
      <div class="field">
        <!-- <label class="label">密码</label> -->
        <div class="control has-icons-left has-icons-right">
          <input class="input" type="password" placeholder="密码" v-model="user.password" name="password" v-validate="'required|min:3|max:10'" :class="{'input': true, 'is-danger': errors.has('password') }" >
          <span class="icon is-small is-left">
            <i class="fa fa-key"></i>
          </span>
          <span class="icon is-small is-right">
            <i v-show="!errors.has('password')" class="fa fa-check"></i>
            <i v-show="errors.has('password')" class="fa fa-warning"></i>
          </span>
        </div>
        <p v-show="errors.has('password')" class="help is-danger">密码错误</p>
      </div>
      <div class="field is-grouped is-grouped-centered">
        <p class="control">
          <a class="button is-primary" :disabled="errors.any()" @click="validateSubmit">
            登录
          </a>
        </p>
        <p class="control">
          <a class="button is-light" @click="reSet">
            重置
          </a>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
import store from 'store/Store'
import user from 'api/User'
    export default{
      data () {
        return {
          //用户对象
          user:{
            username:'',
            password:''
          }
        }
      },
      computed: {
        count () {
          return store.state.count
        }
      },
      methods: {
        //登录
        login(){
          user.Login(this.user)
        },
        reSet(){
          this.user= {
            username:'',
            password:''
          }
        },
        validateSubmit(){
          this.$validator.validateAll().then((result) => {
            if (result) {
              this.login()
            }
          })
        },
        increment () {
          store.commit('increment')
        },
        decrement () {
          store.commit('decrement')
        }
      }
    }
</script>

<style>

</style>
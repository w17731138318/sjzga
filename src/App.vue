<template>
  <div id="app" class="main">
    <router-view></router-view>
  </div>
</template>

<script>

import HelloWorld from 'components/HelloWorld'
import Login from 'components/commons/login/Login'
import {BASE_API, GET_TOKEN, SET_TOKEN, REMOVE_TOKEN} from 'utils/Constant'
export default {
  name: 'app',
   components: {
    HelloWorld,
    Login
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    
  }
}
</script>

<style>
</style>

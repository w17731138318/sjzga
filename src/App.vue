<template>
  <div id="app" class="main">
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from 'components/HelloWorld'
import Login from 'components/commons/login/Login'

export default {
  name: 'app',
   components: {
    HelloWorld,
    Login
  },
  data () {
    return {
    }
  }
}
</script>

<style>
.main{
  background: cadetblue
}
</style>

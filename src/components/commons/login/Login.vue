<template>
  <div>
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
import store from 'store/Store'
    export default{
      computed: {
        count () {
          return store.state.count
        }
      },
      methods: {
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
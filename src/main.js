import Vue from 'vue'
import VeeValidate from 'vee-validate';
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router/index'
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css'

Vue.use(Element)
Vue.use(VeeValidate);
new Vue({
  el: '#app',
  render: h => h(App),
  router
})

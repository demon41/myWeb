import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Image, Form, FormItem, Input, Button } from 'element-ui'

Vue.use(Image)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

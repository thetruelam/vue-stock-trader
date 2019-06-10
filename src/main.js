import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import { routes } from './routes'
import VueResource from 'vue-resource';
import store from './store/store';

Vue.use(VueResource);

Vue.use(BootstrapVue)

Vue.use(VueRouter)

Vue.filter('currency', value => {
  return `$${value.toLocaleString()}`;
})

Vue.http.options.root = 'https://vue-stock-trader-d8efd.firebaseio.com/';

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

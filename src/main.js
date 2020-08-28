import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'vue-md-icons/src/icons/3d_rotation'
import 'vue-md-icons/src/icons'
import Icon from 'vue-md-icons/src/components/Icon'
import store from './store/store';
import { routes } from './routes';

Vue.config.productionTip = false
Vue.component('icon', Icon);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

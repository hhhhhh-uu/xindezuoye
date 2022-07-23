import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import "bootstrap/dist/css/bootstrap.css"
import "./assets/fonts/iconfont.css"
import Mylist from "./views/MyGoodsList.vue"
import Mysearch from "./views/MyGoodsSearch.vue"
import Mylnfo from "./views/MyUserInfo.vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: "/mylist",
    component: Mylist,
  },
  {
    path: "/mysearch",
    component: Mysearch,
  },
  {
    path: "/mylnfo",
    component: Mylnfo,
  },
]
const router = new VueRouter({
  routes,
});
import axios from "axios"
axios.defaults.baseURL = "https://www.escook.cn";
Vue.prototype.$axios = axios;
Vue.directive("focus", { 
  inserted(el) {
    el.focus();
  },
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

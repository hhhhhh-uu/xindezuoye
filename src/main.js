import Vue from 'vue'
import App from './App.vue'
import Index from "./views/Index.vue"
import Classify from "./views/Classify.vue"
import Form from "./views/Form.vue"
import Mine from "./views/Mine.vue"
import Home from "./components/Home.vue"
import News from "./components/News.vue"
import Sports from "./components/Sports.vue"
import Router from "./components/Router.vue"
import Contacts from "./components/Contacts.vue"
import About from "./components/About.vue"

import Sports1 from "./views2/Sports1.vue"
import Sports2 from "./views2/Sports2.vue"
import Sports3 from "./views2/Sports3.vue"
import Contacts2 from "./views3/Contacts2.vue"
import Alice from "./views3/Alice.vue"
import Bod from "./views3/Bod.vue"

import Blog from "./views3/Blog.vue"
import Fax from "./views3/Fax.vue"
Vue.config.productionTip = false
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path:"/router",
    component:Router
  },
  {
    path:"/contacts",
    component:Contacts,
    children:[
      {
        path:"/contacts2",
        component:Contacts2
      }, 
      {
        path:"/alice",
        component:Alice
      }, 
      {
        path:"/bod",
        component:Bod,
        children:[
          {
            path:"/blog",
            component:Blog
          }, 
          {
            path:"/fax",
            component:Fax
          }, 
        ]
      },
    ]
  }, 
   {
    path:"/about",
    component:About
  },
  {
    path:"/home",
    component:Home
  },
  {
    path:"/news",
    component:News
  },
  {
    path:"/sports",
    component:Sports,
    children:[
      {
        path:"/sports1",
        component:Sports1,
      },
      {
        path:"/sports2",
        component:Sports2,
      },
      {
        path:"/sports3",
        component:Sports3,
      }
    ]
  },
  {
    path:"/index",
    component:Index
  },
  {
    path:"/classify",
    component:Classify
  },
  {
    path:"/form",
    component:Form
  },
  {
    path:"/mine",
    component:Mine
  },
]
  const router =new VueRouter({
      routes,
  });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

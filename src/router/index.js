import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../components/index.vue'
import phone from '../components/phone.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: 'index'
},
{
  path: '/index',
  component: index,
  name: 'index'
},
  {
    path: '/phone',
    component: phone,
    name: 'phone'
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})






export default router

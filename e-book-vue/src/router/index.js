import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/ebook/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect: '/ebook'
  },
  {
    path: '/ebook',
    name: 'Ebook',
    component: Index,
    children: [
      {
        path: ':fileName',
        component: () => import(/* webpackChunkName: "ebook" */ '../components/ebook/EbookReader')
      }
    ]
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

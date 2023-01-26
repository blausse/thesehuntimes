import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import jarvisView from '@/views/jarvisView.vue'
import detailView from '@/views/detailView.vue'
import themeView from '@/views/themeView.vue'
import eachView from '@/views/eachView.vue'
import studyView from '@/views/studyView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/jarvis',
    name: 'jarvis',
    // component: () => import('../views/AboutView.vue')
    component: jarvisView
  },
  {
    path: '/detail/:theme&:subject',
    name: 'detail',
    component: detailView
  },
  {
    path: '/theme/:title',
    name: 'theme',
    component: themeView
  },
  {
    path: '/each',
    name: 'each',
    component: eachView
  },
  {
    path: '/study',
    name: 'study',
    component: studyView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import jarvisView from '@/views/jarvisView.vue'
import detailView from '@/views/detailView.vue'
import themeView from '@/views/themeView.vue'
import eachView from '@/views/eachView.vue'
import studyView from '@/views/studyView.vue'
import EditorView from '@/views/EditorView.vue'
import myListView from '@/views/myListView.vue'
import searchView from '@/views/searchView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/jarvis',
    name: 'jarvis',
    component: jarvisView
  },
  {
    path: '/theme/detail/:title&:subject',
    name: 'detail',
    component: detailView
  },
  {
    path: '/theme/:title',
    name: 'theme',
    component: themeView
  },
  {
    // path: '/each/:postKey&:jarvis',
    path: '/each/:postKey&:jarvis',
    name: 'each',
    component: eachView
  },
  {
    path: '/study',
    name: 'study',
    component: studyView
  },
  {
    path:'/jarvis/write/:content',
    name:'write',
    component: EditorView
  },
  {
    path:'/myList',
    name:'myList',
    component: myListView
  },
  {
    path:'/search/:content',
    name:'search',
    component: searchView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

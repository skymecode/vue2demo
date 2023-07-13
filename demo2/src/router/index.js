import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Login from '../components/login'
import Note from '../components/note'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {

      path:'/content',
      name:'content',
      component: Index,
      children:[
        {
          // 当 /user/:id/profile 匹配成功
          // UserProfile 将被渲染到 User 的 <router-view> 内部
          path: 'note',
          component: Note,
        }]
    }
  ]
})

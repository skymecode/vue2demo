import Vue from 'vue'
import Router from 'vue-router'
import Content from '../components/content'
import Index from '../components/index'


Vue.use(Router);

export default new Router({
  
  routes:[
    {
      path:'/content',name: 'content',component:Content
    },
    {
      path: '/',
      name: 'index',
      component: Index,
     
    }
  
  ]
 
})
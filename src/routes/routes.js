import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Slot from '../views/slot/Slot.vue'
import Dynamic from '../views/dynamic/Dynamic.vue'
import NotFound from '../views/common/NotFound.vue'
import TreeMenu from '../views/common/TreeMenu.vue'
import Params from '../views/params/Params.vue'
import nestedRouter from '../views/nested/nestedRouter.vue'
import DynamicA from '../components/dynamic/DynamicA'
import DynamicB from '../components/dynamic/DynamicB'
import DynamicC from '../components/dynamic/DynamicC'
import Factorial from '../views/factorial/Factorial'
import Store from '../views/store/Store'
import Store2 from '../views/store/Store2'
import Closure from '../views/closure/Closure'
import Todolist from '../views/todolist/Todolist'



Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // linkActiveClass:'on',
  // linkExactActiveClass:'sub',
  routes: [
    {
      path:'/error',
      redirect:'/slot/child'
    },
    {
      path:'*',
      name:'not-found',
      component: NotFound
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path:'/slot',
      name: 'slot',
      component: Slot
    },
    {
      path:'/dynamic',
      component: Dynamic
    },
    {
      path:'/tree',
      component:TreeMenu
    },
    {
      path:'/params/:id',
      component:Params
    },
    {
      path:'/nested',
      component:nestedRouter,
      redirect:'/nested/a',
      children:[
        {
          path:'a',
          component:DynamicA
        },
        {
          path:'b',
          name:'router-b',
          component:DynamicB
        },
        {
          path:'c',
          component:DynamicC
        },
      ]
    },
    {
      path:'/factorial',
      component:Factorial
    },
    {
      path:'/store',
      component:Store
    },
    {
      path:'/closure',
      component:Closure
    },
    {
      path:'/store2',
      component:Store2
    },
    {
      path:'/todolist',
      component:Todolist
    }
  ]
})

router.beforeEach((to,from,next)=>{
  // 세션체크
  console.log(to.matched, from)
  let session = Math.random() > 0.5 ? true : true   // Math.random 은 0 부터 1까지 사이 숫자를 뿌림
  if(session){
    next()
  } else{
    next('/login')
  }

 
})

export default router
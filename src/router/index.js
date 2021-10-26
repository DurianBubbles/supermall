import Vue from 'vue'
import VueRouter from 'vue-router'

// 安装插件
Vue.use(VueRouter)

// 懒加载方式
// 首页组件
const Home = () => import('views/home/Home.vue')
// 分类组件
const Category = () => import('views/category/Category.vue')
// 我的组件
const Profile = () => import('views/profile/Profile.vue')
// 购物车组件
const Shopcart = () => import('views/shopcart/Shopcart.vue')
// 详情页组件
const Detail = () => import('views/detail/Detail.vue')

const routes = [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/shopcart',
      component:Shopcart
    },
    {
      path:'/detail/:id',
      component:Detail
    }
]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router

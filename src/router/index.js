import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' },
    }]
  },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'example' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  {
    path: '/company',
    component: Layout,
    meta: { title: '公司概况', icon: 'form' },
    children: [
      {
        path: 'index',
        name: 'company',
        component: () => import('@/views/company/index'),
        meta: { title: '公司简介', icon: 'form' }
      },
      {
        path: 'qualification',
        name: 'qualification',
        component: () => import('@/views/company/qualification'),
        meta: { title: '公司资质', icon: 'table' }
      },
      {
        path: 'ceo',
        name: 'Tree',
        component: () => import('@/views/company/ceo'),
        meta: { title: '专家团队', icon: 'ceo' }
      },
      {
        path: 'organization',
        name: 'organization',
        component: () => import('@/views/company/organization'),
        meta: { title: '组织结构', icon: 'tree' }
      },
      {
        path: 'honor',
        name: 'honor',
        component: () => import('@/views/company/honor'),
        meta: { title: '公司荣誉', icon: 'example' }
      },
      {
        path: 'branch',
        name: 'branch',
        component: () => import('@/views/company/branch'),
        meta: { title: '分支机构', icon: 'list' }
      },
      {
        path: 'add',
        name: 'add',
        component: () => import('@/views/company/addQua'),
        meta: { title: '添加资质', icon: 'list' },
        hidden:true
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/views/company/contact'),
        meta: { title: '联系我们', icon: 'concat' },
      }
    ]
  },
  {
    path: '/achievement',
    component: Layout,
    meta: { title: '业绩展示', icon: 'form' },
    children: [
      {
        path: 'index',
        name: 'achievement',
        component: () => import('@/views/achievement/list'),
        meta: { title: '业绩展示', icon: 'form' }
      },
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

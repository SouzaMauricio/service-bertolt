import { createRouter, createWebHistory } from 'vue-router'
import MainScreen from './views/MainScreen'
import LoginScreen from './views/LoginScreen'
import DefaultScreen from './views/DefaultScreen'
import ContactsScreen from './views/ContactsScreen'
import RegisterProperty from './views/RegisterProperty'
import DefaultContainer from './containers/DefaultContainer'
import { store } from './store/store'

const routes = [
  {
    path: '/login',
    component: LoginScreen,
    meta: { requiresAuth: false }
  },
  {
    path: '/',
    name: 'DefaultContainer',
    component: DefaultContainer,
    children: [
      {
        path: '/',
        redirect: 'main',
        meta: { requiresAuth: true }
      },
      {
        path: '/main',
        name: 'Main',
        component: MainScreen,
        meta: { requiresAuth: true }
      },
      {
        path: '/registerProperty',
        name: 'RegisterProperty',
        component: RegisterProperty,
        meta: { requiresAuth: true }
      },
      {
        path: '/contacts',
        name: 'Contacts',
        component: ContactsScreen,
        meta: { requiresAuth: true }
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'RouteNotFound',
        component: DefaultScreen,
        meta: { requiresAuth: true }
      }
    ]
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior () {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && store.getters.isAuthenticated) {
    next('/main')
    return
  }
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
})

export default router
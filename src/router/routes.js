import Login from '../pages/Login/Login.vue';
import Msize from '../pages/Msite/Msite.vue';
import Search from '../pages/Search/Search.vue';
import Order from "../pages/Order/Order.vue";
import Profile from "../pages/Profile/Profile.vue";
export default [
  {
    path: '/',
    require: Msize,
    
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/msize',
    component: Msize,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShowFooter: true
    }
  }
]
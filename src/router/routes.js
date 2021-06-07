import Login from '../pages/Login/Login.vue';
import Msize from '../pages/Msite/Msite.vue';
import Search from '../pages/Search/Search.vue';
import Order from "../pages/Order/Order.vue";
import Profile from "../pages/Profile/Profile.vue";
export default [
  {
    path: '/',
    require: Msize
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/msize',
    component: Msize
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/profile',
    component: Profile
  }
]
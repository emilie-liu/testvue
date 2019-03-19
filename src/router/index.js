import Vue from 'vue';
import Router from 'vue-router';
import goods from '@/components/goods.vue';
import ratings from '@/components/ratings.vue';
import seller from '@/components/seller.vue'



Vue.use(Router);

const  routes = [
  {
    path: '/',
    redirects:'/goods'
  },
  {
    path: '/goods',
    component:goods
  },
  {
    path: '/ratings',
    component:ratings
  },
  {
    path: '/seller',
    component:seller
  }
];


export default new Router({
  routes,
  linkActiveClass: 'active'
});

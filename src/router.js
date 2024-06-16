import Vue from 'vue';
import Router from 'vue-router';
import TheHome from './views/TheHome.vue';
import TheAbout from './views/TheAbout.vue';
import TheContact from './views/TheContact.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheHome
    },
    {
      path: '/about',
      name: 'about',
      component: TheAbout
    },
    {
      path: '/contact',
      name: 'contact',
      component: TheContact
    }
  ]
});

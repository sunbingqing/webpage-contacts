import Vue from 'vue';
import Router from 'vue-router';
import infoEdit from '@/components/infoEdit/infoEdit';
import infoCreate from '@/components/infoCreate/infoCreate';
import detail from '@/components/detail/detail';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/infoEdit/:id',
      name: 'infoEdit',
      component: infoEdit
    },
    {
      path: '/infoCreate',
      name: 'infoCreate',
      component: infoCreate
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    }
  ]
});

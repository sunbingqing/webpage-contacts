import Vue from 'vue'
import Router from 'vue-router'
import contacts from '@/components/contacts/contacts'
import infoEdit from '@/components/infoEdit/infoEdit'
import detail from '@/components/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/contacts',
      name: 'contacts',
      component: contacts
    },
    {
      path: '/infoEdit',
      name: 'infoEdit',
      component: infoEdit
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ]
})



import Vue from 'vue';
import app from './App.vue';
import VueRouter from 'vue-router';
import account from './main/account.vue';
import goodlist from './main/goodlist.vue';
import children1 from './children/children1.vue'
import children2 from './children/children2.vue'

Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    // account goodlist
   {
     path: '/account', 
     component: account,
     children: [{path: 'children1', component: children1,},{path:'children2',component: children2}]
    },
   {path: '/goodlist', component: goodlist}
  ]
})
let vm = new Vue({
  el: '#app',
  render: c => c(app), // 会把 el 指定的容器中，所有的内容都清空覆盖， 所以不能把rounter-link 、 rounter-view 放到指定容器中去
  router, // 将路由挂在到 vm 上
})
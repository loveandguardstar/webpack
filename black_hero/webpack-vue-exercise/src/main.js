

//  入口JS
console.log('Are you OK');
import Vue from 'vue';
import login from './login.vue'


// let login = {
//   template: '<h1>66666</h1>'
// }

let vm = new Vue({
  el:"#app",
  data: function() {
    return {
      msg: 123
    }
  },
  // components: {
  //   login
  // },
  render: c => c(login),
})
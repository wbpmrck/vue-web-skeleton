// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from '../../src/app/index.vue'
import router from '../../src/router/index'

Vue.config.productionTip = false

console.log('Vue is');
console.log(Vue);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { app },
  template: '<app />'
})

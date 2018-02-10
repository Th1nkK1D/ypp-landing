// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

import App from './App'

Vue.config.productionTip = false

Vue.use(VueScrollTo, {
  duration: 1000,
  easing: "ease",
  cancelable: false,
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import Router from 'vue-router'
import App from './app'
import '../../common/reset.css'
Vue.use(Router)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]
const router = new Router({
  routes: routes
})

// import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
// var rr=function(){
// 	console.log(90)
// }
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

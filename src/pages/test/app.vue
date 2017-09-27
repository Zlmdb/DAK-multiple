<template>
  <div id="app">
    <top></top>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
     <router-view></router-view>
    <h1>{{ msg }}</h1>
    <foot></foot>
  </div>
</template>

<script>
// import Vue from 'vue'
// import Router from 'vue-router'

// Vue.use(Router)

// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }
// const routes = [
//   { path: '/foo', component: Foo },
//   { path: '/bar', component: Bar }
// ]
// const router = new VueRouter({
//   routes 
// })
import header from '../../components/header.vue'
import footer from '../../components/footer.vue'
export default {
  data () {
    return {
      msg: 'test页面'
    }
  },
  components:{
    top:header,
    foot:footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>

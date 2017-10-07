<template>
  <div id="app">
    <top></top>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
    <router-view></router-view>
    <h1>{{ msg }}</h1>
    <man></man>
    <foot></foot>
  </div>
</template>

<script>
import header from '../../components/header.vue'
import main from '../../components/main.vue'
import footer from '../../components/footer.vue'
export default {
  data () {
    return {
      msg: 'test页面'
    }
  },
  components:{
    top:header,
    foot:footer,
    man:main
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>

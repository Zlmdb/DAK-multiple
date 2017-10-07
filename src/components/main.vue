<template>
  <div class="main">
    <p>{{ msg }}</p>
    <aa @inc='main'></aa>
    <bb :baccept='atob'></bb>
  </div>
</template>

<script>
import a from './a.vue'
import b from './b.vue'
	
// const bus = new Vue();
export default {
  data () {
    return {
      msg: '主组件',
      atob:''
    }
  },
  components:{
  	aa:a,bb:b
  },
  methods:{
  	main(tr){
  		this.atob=tr;
  	}
  }
}
</script>
<style scoped>
	.main{
		padding:30px 0;
		background-color: yellow
	}
</style>

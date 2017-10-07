<template>
  <div>
    <p @click='add'>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'a组件'
    }
  },
	methods: {
	    add: function () {
	        this.$emit('inc', 'a传给b')
	    }
	}
}
</script>
<style scoped>

</style>

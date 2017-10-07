<template>
  <div>
    <p>{{ msg }}</p>
    <p>{{ this.baccept}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'b组件'
    }
  },
  props:['baccept']
}
</script>
<style scoped>

</style>

<template>
  <div>
    <h1>这是登录组件， 用 .vue 定义出来的{{msg}}</h1>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      msg: '123'
    }
  },
  methods: {
    show() {
      console.log('调用了 login')
    }
  }
}
</script>

<style scoped>

</style>



<template>
  <div>
    <h1>这是 account 组件</h1>
    <router-link to="/account/children1">1123123</router-link>
    <router-link to="/account/children2">这是第二个组件</router-link>

    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style scoped>
  html,body,h1,h2,div {
    color: red;
  }
  a {
    list-style: none;
    text-decoration: none;
  }
</style>



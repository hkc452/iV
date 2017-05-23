<template>
    <router-view></router-view>
</template>
<script>
  //调试kview时关闭，不想开两个工程，所以这样处理
  import 'iview/dist/styles/iview.css';
  import Vue from 'vue';
  import iView from 'iview';
  Vue.use(iView);
</script>
<style lang="less" rel="stylesheet/less">

</style>
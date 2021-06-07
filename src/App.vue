<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide/>
  </div>
</template>

<script>
import router from "./router/index";
import FooterGuide from '@/components/NaviGation/FooterGuide'
export default {
  name: 'App',
  components: {
    FooterGuide
  },
  router
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>

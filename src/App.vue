<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShowFooter===true"/>
  </div>
</template>

<script>
import router from "./router/index";
import FooterGuide from '@/components/NaviGation/FooterGuide'
import {reqAddress} from '@/api'
export default {
  name: 'App',
   mounted () {
    this.ddress()
  },
  methods:{
    async ddress() {
      const result = await reqAddress('116.36867','40.10038')
      console.log(result);
    }
  },
  components: {
    FooterGuide
  },
  router
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>

<template>
    <div class="footer_guide">
      <span class="guideItem" :class="{on:$route.path==='/msize'}" @click="goPath('/msize')" >
        <span>
          <i class="iconfont icon-zhuye"></i>
        </span>
        <span>首页</span>
      </span>
      <span class="guideItem" :class="{on:$route.path==='/search'}" @click="goPath('/search')" >
        <span>
          <i class="iconfont icon-serch4"></i>
        </span>
        <span>搜索</span>
      </span>
      <span class="guideItem" :class="{on:$route.path==='/order'}" @click="goPath('/order')" >
        <span>
          <i class="iconfont icon-order"></i>
        </span>
        <span>订单</span>
      </span>
      <span class="guideItem" :class="{on:$route.path==='/profile'}"  @click="goPath('/profile')" >
        <span>
          <i class="iconfont icon-UserPersonAccountInterfaceLogin"></i>
        </span>
        <span>个人</span>
      </span>
    </div>
</template>

<script>
export default {
  name: 'FooterGuide',
  data() {
    return {
    }
  },
  methods: {
    goPath(path) {
      if(path !== this.$route.path) this.$router.push(path) 
      else window.location = path
    }
  }

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins';
  .footer_guide
    top-border-1px(#cccccc)
    display flex
    position fixed
    left 0
    bottom 0
    width 100%
    height 50px
    background #fff
    .guideItem
      margin-top 10px
      display flex
      flex-direction column
      text-align center
      width 25%
      &.on
        color $green
      span
        margin-top 3px
        font-size 15px
        i
          font-size 18px
</style>

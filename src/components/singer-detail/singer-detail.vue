<template>
  <transition name="slide" mode="out-in">
    <div class="singer-detail"></div>
  </transition>
</template>

<script>
export default {
  name: 'SingerDetail'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable'
  .singer-detail
    position: fixed
    z-index: 100
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: $color-background

  .slide-enter-active, .slide-leave-active
    transition: all 2.3s;

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>

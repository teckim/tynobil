<template>
  <div class="scroller">
    <div class="scroller__headline">
      <div class="scroller__overtitle">
        Hot deals now
      </div>
      <div class="scroller__title-stack">
        <h2 class="scroller__title">
          New arrivals
        </h2>
        <Link>
          <span>Browse All</span>
          <Icon width="36" name="arrow-right" />
        </Link>
      </div>
      <vue-horizontal :button="false">
        <slot />
      </vue-horizontal>
      <!-- <div class="scroller__body">
        <div class="scroller__list">
          <slot />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import VueHorizontal from 'vue-horizontal'

export default {
  name: 'ListingScroller',
  components: { VueHorizontal }
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/components/scroller.scss'
</style>

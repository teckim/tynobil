<template>
  <div class="scroller">
    <div class="scroller__headline">
      <div class="scroller__overtitle">
        {{ overtitle }}
      </div>
      <div class="scroller__title-stack">
        <h2 class="scroller__title">
          {{ title }}
        </h2>
        <Link>
          <span>Browse All</span>
          <Icon width="36" name="arrow-right" />
        </Link>
      </div>
      <div class="scroller__body">
        <div class="scroller__list">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListingScroller',
  props: {
    title: {
      type: String,
      default: null,
      required: true
    },
    overtitle: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped lang="pcss" src="~/assets/sass/components/scroller.pcss" />

<template>
  <button type="button" class="button" :class="buttonClasses">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    outlined: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    buttonClasses () {
      return {
        'button--outlined': this.outlined,
        'button--icon': this.icon,
        'button--primary': this.theme && this.theme === 'primary'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/sass/components/button.scss";
</style>

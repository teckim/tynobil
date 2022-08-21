<template>
  <button
    type="button"
    class="button"
    :class="buttonClasses"
    @click="e => $emit('click', e)"
  >
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
    text: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null,
      validator: v => ['sm', 'xs'].includes(v)
    }
  },
  computed: {
    buttonClasses () {
      return {
        'button--outlined': this.outlined,
        'button--icon': this.icon,
        'button--text': this.text,
        'button--primary': this.theme && this.theme === 'primary',
        [`button--${this.size}`]: this.size
      }
    }
  }
}
</script>

<style scoped lang="pcss" src="~/assets/sass/components/button.pcss" />

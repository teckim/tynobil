<template>
  <div class="tag" :class="tagClasses">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    theme: {
      type: String,
      default: null
    }
  },
  computed: {
    tagClasses () {
      return {
        'tag--primary': this.theme && this.theme === 'primary'
      }
    }
  }
}
</script>

<style scoped lang="pcss" src="~/assets/sass/components/tag.pcss" />

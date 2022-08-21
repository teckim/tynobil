<template>
  <Component :is="src" :width="dimentions.width" :height="dimentions.height" />
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true
    },
    height: {
      type: [String, Number],
      default: 20
    },
    width: {
      type: [String, Number],
      default: 20
    },
    size: {
      type: String,
      default: null,
      validate: v => ['sm', 'xs'].includes(v)
    }
  },
  computed: {
    src () {
      const src = require(`assets/icons/${this.name}.svg?inline`)
      return src
    },
    dimentions () {
      const dimentions = {
        width: this.width,
        height: this.height
      }

      if (this.size === 'sm') {
        dimentions.width = '16'
        dimentions.height = '16'
      } else if (this.size === 'xs') {
        dimentions.width = '12'
        dimentions.height = '12'
      }

      return dimentions
    }
  }
}
</script>

<template>
  <div ref="checkbox-group" class="checkbox-group">
    <Checkbox
      v-for="option in options"
      :key="option.key"
      :value="value"
      :label="option.label"
      :input-value="option.value"
      :name="name"
      :group-ref="() => $refs['checkbox-group']"
      :disabled="disabled || option.disabled"
      group
      @input="v => $emit('input', v)"
    />
  </div>
</template>

<script>
export default {
  name: 'CheckboxGroup',
  props: {
    options: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    data: ['audi', 'bmw', 'peugot']
  }),
  methods: {
    onInput (v) {
      this.data.push(v)
      this.$emit('input', this.data)
      // console.log(v)
    }
  }
}
</script>

<style scoped lang="pcss">
.checkbox-group {
  @apply flex flex-col gap-y-2;
}
</style>

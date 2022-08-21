<template>
  <div class="checkbox">
    <label class="checkbox__container">
      <input
        class="checkbox__input"
        type="checkbox"
        :name="name"
        :value="inputValue"
        :checked="checked"
        :disabled="disabled"
        @change="onChange"
        @input="onInput"
      >
      <span class="checkbox__label">{{ label }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    label: {
      type: String,
      default: null
    },
    value: {
      type: [Boolean, Array],
      default: null
    },
    inputValue: {
      type: [String, Number],
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    group: {
      type: Boolean,
      default: false
    },
    groupRef: {
      type: Function,
      default: () => null
    },
    name: {
      type: String,
      default: null
    },
    onChange: {
      type: Function,
      default: () => null
    }
  },
  computed: {
    checked () {
      if (this.group && Array.isArray(this.value)) { return this.value.includes(this.inputValue) }

      return this.value
    }
  },
  methods: {
    onInput (event) {
      if (!this.group || !this.name) { return this.$emit('input', event.target.checked) }

      const selectQuery = `input[name="${this.name}"][type="checkbox"]:checked`
      const checkboxes = (this.groupRef() || document).querySelectorAll(selectQuery)
      const values = [...checkboxes].map(checkbox => checkbox.value)

      this.$emit('input', values)
    }
  }
}
</script>

<style scoped lang="pcss" src="~/assets/sass/components/checkbox.pcss" />

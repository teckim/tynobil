<template>
  <Transition name="dialog" mode="in-out">
    <Dialog v-if="isVisible" :id="id">
      <div class="filters-dialog">
        <Collapser title="Brands">
          <div class="filters-dialog__collapser-content">
            <CheckboxGroup v-model="filtes.brands" :options="options" name="brands" />
          </div>
        </Collapser>
        <Collapser title="Models">
          <div class="filters-dialog__collapser-content">
            <CheckboxGroup v-model="filtes.models" :options="options" name="models" />
          </div>
        </Collapser>
        <Collapser title="Engin power" />
        <Collapser title="Year" />
        <Collapser title="Price" />
        <Collapser title="Color" />
        <Collapser title="Hors power" />
      </div>
      <template slot="dialog-footer">
        <div class="filters-dialog__footer">
          <Button theme="primary" size="sm">
            Show results (243)
            <Icon size="sm" name="search" />
          </Button>
        </div>
      </template>
    </Dialog>
  </Transition>
</template>

<script>
import { mapState } from 'vuex'

export const DIALOG_ID = 'filters-dialog'
const OPTIONS = [
  { key: 'audi', label: 'Audi', value: 'audi', disabled: true },
  { key: 'bmw', label: 'BMW', value: 'bmw' },
  { key: 'peugot', label: 'Peugot', value: 'peugot' },
  { key: 'rauneult', label: 'Rauneult', value: 'rauneult' }
]

export default {
  name: 'FiltersDialog',
  props: {
    value: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      id: DIALOG_ID,
      selectedBrands: [],
      selectedModels: [],
      options: OPTIONS,
      filtes: {
        brands: [],
        models: []
      }
    }
  },
  computed: {
    ...mapState({
      isVisible: state => state.layout.dialogs.includes(DIALOG_ID)
    })
  },
  watch: {
    filtes: {
      handler (newFilters) {
        this.$emit('input', newFilters)
      },
      deep: true
    }
  }
}
</script>

<style scoped lang="pcss" src="~/assets/sass/components/filters-dialog.pcss" />

<style scoped>
.dialog-enter-active,
.dialog-leave-active {
  transition: .3s ease-in-out;
}

.dialog-enter, .dialog-leave-active {
  transform: translateX(-100%) !important;
  opacity: 0;
}
</style>

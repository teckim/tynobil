<template>
  <div class="collapser">
    <div class="collapser__header" @click="isOpen = !isOpen">
      <div class="collapser__header-label">
        {{ title }}
      </div>
      <div class="collapser__header-icon">
        <Icon v-if="isOpen" name="chevron-up" size="sm" />
        <Icon v-else name="chevron-down" size="sm" />
      </div>
    </div>
    <Transition name="collapser">
      <div v-if="isOpen" class="collapser__body" @click.stop>
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: 'Collapser',
  props: {
    title: {
      type: String,
      default: null
    }
  },
  data: () => ({
    isOpen: false
  })
}
</script>

<style scoped lang="pcss" src="~/assets/sass/components/collapser.pcss" />

<style scoped>
.collapser-enter-active, .collapser-leave-active {
  /* transition: opacity .5s; */
  transition-property: max-height, opacity;
  transition: .5s ease-in-out;
  /* max-height: 500px; */
}

.collapser-enter-to, .collapser-leave {
  max-height: 500px;
}

.collapser-enter, .collapser-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>

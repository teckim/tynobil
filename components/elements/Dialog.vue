<template>
  <div class="dialog">
    <div class="dialog__container">
      <div class="dialog__header">
        <div class="dialog__title">
          Filters
        </div>
        <div class="dialog__close-btn">
          <Button icon text @click="$dialogs.close(id)">
            <Icon name="close" />
          </Button>
        </div>
      </div>
      <div class="dialog__body">
        <slot />
      </div>
      <div class="dialog__footer">
        <slot name="dialog-footer" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="pcss" src="~/assets/sass/components/dialog.pcss" />

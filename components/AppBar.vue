<template>
  <div class="app-bar">
    <div class="app-bar__link">
      <Icon width="32" height="32" class="app-bar__link-icon" name="search" />
      <div class="app-bar__link-text">
        Search
      </div>
    </div>
    <div class="app-bar__link">
      <Icon width="32" height="32" class="app-bar__link-icon" name="checkbox" />
      <div class="app-bar__link-text">
        Sell
      </div>
    </div>
    <div class="app-bar__link">
      <Icon width="32" height="32" class="app-bar__link-icon" name="info-rect" />
      <div class="app-bar__link-text">
        About us
      </div>
    </div>
    <div class="app-bar__link">
      <Icon width="32" height="32" class="app-bar__link-icon" name="user" />
      <div class="app-bar__link-text">
        Login
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.app-bar {
  position: fixed;
  z-index: 1;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: $app-bar-height;
  background-color: #fff;
  border-top: 2px solid $color-primary-50;

  &__link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    @include flex-row-gap($space-1);

    &-icon {
      color: $color-primary;
    }

    &-text {
      color: $text-color-lighter;

      @include font-style('xs', 'bold')
    }
  }
}
</style>

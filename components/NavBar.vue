<template>
  <div class="nav-bar">
    <Icon class="nav-bar__logo" name="logo" />
    <div class="nav-bar__actions">
      <NuxtLink to="/login">
        <Button icon>
          <Icon name="user" />
        </Button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "~assets/sass/components/nav-bar.scss";
</style>

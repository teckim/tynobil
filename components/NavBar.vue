<template>
  <div class="nav-bar">
    <div class="nav-bar__logo">
      LOGO
    </div>
    <div class="nav-bar__actions">
      <NuxtLink to="/login">
        <Button icon size="sm">
          <Icon name="user" size="sm" />
        </Button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="pcss" src="~/assets/sass/components/nav-bar.pcss" />

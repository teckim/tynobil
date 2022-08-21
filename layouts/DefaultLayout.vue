<template>
  <div class="layout">
    <header>
      <NavBar />
      <AppBar />
    </header>
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.layout {
  padding-bottom: $app-bar-height;
}
</style>

<template>
  <vs-navbar square center-collapsed>
    <template #left>
      <Icon class="nav-bar__logo" name="logo" />
    </template>
    <vs-navbar-item>
      Guide
    </vs-navbar-item>
    <vs-navbar-item>
      Documents
    </vs-navbar-item>
    <vs-navbar-item>
      Components
    </vs-navbar-item>
    <vs-navbar-item>
      license
    </vs-navbar-item>
    <template #right>
      <NuxtLink to="/login">
        <vs-button icon flat>
          <Icon name="user" width="18" height="18" />
        </vs-button>
      </NuxtLink>
      <NuxtLink to="/login">
        <vs-button flat color="secondary">
          Get started
        </vs-button>
      </NuxtLink>
      <!-- <vs-button color="#fff" flat>
        Login
      </vs-button>
      <vs-button color="#fff" border>
        Get Started
      </vs-button> -->
    </template>
  </vs-navbar>
  <!-- <div class="nav-bar">
    <Icon class="nav-bar__logo" name="logo" />
    <div class="nav-bar__actions">
      <NuxtLink to="/login">
        <Button icon>
          <Icon name="user" />
        </Button>
      </NuxtLink>
    </div>
  </div> -->
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "~assets/sass/components/nav-bar.scss";
</style>

<template>
  <div>
    <section class="hero">
      <div class="hero__headline">
        <h1 class="hero__headline-title">
          Buy / Sell <br> your car comfortably
        </h1>
        <span class="hero__headline-subtitle">
          No hassle. No surprises. It's fast, simple, and totally transparent.
        </span>
      </div>
      <div class="hero__actions">
        <Button nuxt-link="/buy" link="/buy">
          Buy
        </Button>
        <Button outlined>
          Sell
        </Button>
      </div>
    </section>
    <section>
      <ListingScroller>
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
      </ListingScroller>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'DefaultLayout'
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/pages/home.scss'
</style>

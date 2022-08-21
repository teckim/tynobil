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
        <Button nuxt-link="/buy" link="/buy" theme="primary">
          Buy
        </Button>
        <Button>
          Sell
        </Button>
      </div>
    </section>
    <section>
      <ListingCard />
      <ListingScroller title="New Arrivals" overtitle="Hot deals now">
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
      </ListingScroller>
    </section>
    <section>
      <ListingScroller title="Popular">
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

<style lang="pcss" scoped>
@import '~assets/sass/pages/home.pcss';
</style>

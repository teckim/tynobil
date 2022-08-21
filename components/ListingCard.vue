<template>
  <div class="listing-card">
    <nuxt-link to="listings/elksdf23ej3po23">
      <div class="listing-card__wrapper">
        <div class="listing-card__badge">
          <Tag theme="primary">
            unique configuration
          </Tag>
        </div>
        <div class="listing-card__image" />
        <div class="listing-card__body">
          <h3 class="listing-card__title">
            Renault Talisman 1.8 TCe Initiale Paris
          </h3>
          <div class="listing-card__info-stack">
            <div>2019</div>
            <div>89.938 Km</div>
          </div>
          <div class="listing-card__tag-stack">
            <Tag>petrol</Tag>
            <Tag>4x4</Tag>
            <Tag>Automatic</Tag>
          </div>
          <div class="listing-card__price">
            239 Millions
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ListingCard'
}
</script>

<style scoped lang="pcss" src="~/assets/sass/components/listing-card.pcss" />

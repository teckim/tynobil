<template>
  <div class="listings-page">
    <section class="listings-page__filters">
      <Button theme="primary" size="sm" @click="showDialog">
        Filters
        <Icon size="sm" name="filter" />
      </Button>
      <Button outlined size="sm" @click="showDialog">
        Sort
        <Icon size="sm" name="order" />
      </Button>
    </section>
    <section class="listings-page__content">
      <ListingCard />
      <ListingCard />
      <ListingCard />
      <ListingCard />
      <ListingCard />
      <ListingCard />
    </section>
    <FiltersDialog v-model="filters" />
  </div>
</template>

<script>
import { stringify, parse } from 'query-string'
import { DIALOG_ID as FILTERS_DIALOG_ID } from '~/components/dialogs/FiltersDialog.vue'

export default {
  name: 'ListingsPage',
  layout: 'DefaultLayout',
  asyncData ({ query, route }) {
    // const parsedUrl = parseUrl(route.fullPath, { arrayFormat: 'comma' })
    const [, queryString] = route.fullPath.split('?')
    // const params = new URLSearchParams(route.fullPath)
    // console.log(parse(queryString, { arrayFormat: 'comma' }))
    const parsedQuery = parse(queryString, { arrayFormat: 'comma' })

    return {
      query: parsedQuery
    }
  },
  data () {
    return {
      filters: {
        brands: [],
        models: []
      }
    }
  },
  watch: {
    filters: {
      handler (newFilters) {
        const stringifiedFilters = stringify(newFilters, { arrayFormat: 'comma' })
        // console.log(stringifiedFilters, this.$route.path)
        this.$router.push({ path: `${this.$route.path}?${stringifiedFilters}` })
      },
      deep: true
    }
  },
  watchQuery: ['filters'],
  methods: {
    showDialog () {
      this.$dialogs.open(FILTERS_DIALOG_ID)
    }
  }
}
</script>

<style scoped lang="pcss" src="~/assets/sass/pages/listings.pcss" />

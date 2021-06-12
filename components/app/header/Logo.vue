<template>
  <nuxt-link :to="localePath('index', $i18n.locale)" :title="app.site_name" class="d-flex align-center">
    <img :src="app.logo" :alt="app.site_name" height="72" width='116'>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Logo',
computed:{
    app(){
      return this.$store.state.app
    }
}
}
</script>


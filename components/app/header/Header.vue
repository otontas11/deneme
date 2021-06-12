<template>
  <v-app-bar app :height='80' color='white' elevation='1'>

    <v-container class='d-flex align-center justify-space-between px-0 px-md-3'>

      <app-header-logo />

      <client-only>

        <div class='d-flex align-center ml-md-10'>

          <template>
            <template v-if='$vuetify.breakpoint.mdAndUp'>
              <app-header-nav-menu />
              <app-header-search />
              <app-header-language />
            </template>

            <app-header-register />

          </template>

        </div>
      </client-only>
    </v-container>

  </v-app-bar>

</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

</style>

<template>
  <v-app-bar app :height='80' color='white' elevation='1'>

    <v-container class='d-flex align-center justify-space-between px-0 px-md-3'>

      <header-logo />

      <client-only>

        <div class='d-flex align-center ml-md-10'>

          <template>
            <template v-if='$vuetify.breakpoint.mdAndUp'>
              <header-nav-menu />
              <header-search />
              <header-language />
            </template>

            <template>
              <header-register v-if='!$store.state.profile.userLogged' />
              <profile-btn v-else />
            </template>

          </template>

        </div>
      </client-only>
    </v-container>

  </v-app-bar>

</template>

<script>
import HeaderLogo from '~/components/app/header/Logo'
import HeaderNavMenu from '~/components/app/header/NavMenu'
import HeaderSearch from '~/components/app/header/Search'
import HeaderLanguage from '~/components/app/header/Language'
import HeaderRegister from '~/components/app/header/Register'
import ProfileBtn from '~/components/app/header/ProfileBtn'

export default {
  name: 'Header',
  components: {
    HeaderLogo, HeaderNavMenu, HeaderSearch, HeaderLanguage, HeaderRegister, ProfileBtn
  }
}
</script>

<style scoped>

</style>

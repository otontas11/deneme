<template>
  <v-footer dark padless>

    <v-card class='d-flex primary' flat tile
            :height="$vuetify.breakpoint.mdAndUp?'176':'48'"
            width='100%'>

      <v-container class='d-flex align-center justify-space-between px-0 px-md-3'>
        <client-only>

          <header-logo v-if='$vuetify.breakpoint.mdAndUp' />
          <header-nav-menu />

          <icons v-if='$vuetify.breakpoint.mdAndUp' />

        </client-only>
      </v-container>

    </v-card>
  </v-footer>
</template>

<script>
import Icons from '~/components/global/socialMedia/Icons'
import HeaderLogo from '~/components/app/header/Logo'
import HeaderNavMenu from '~/components/app/header/NavMenu'

export default {
  name: 'index',
  components: {
    Icons, HeaderLogo, HeaderNavMenu
  }

}
</script>

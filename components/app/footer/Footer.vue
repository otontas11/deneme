<template>
  <v-footer dark padless >

    <v-card class='d-flex primary' flat tile
            :height="$vuetify.breakpoint.mdAndUp?'176':'48'"
            width='100%'>

      <v-container class='d-flex align-center justify-space-between px-0 px-md-3'>
        <client-only>

          <app-header-logo v-if='$vuetify.breakpoint.mdAndUp' />
          <app-header-nav-menu />

          <icons v-if='$vuetify.breakpoint.mdAndUp' />

        </client-only>
      </v-container>

    </v-card>
  </v-footer>
</template>

<script>
import Icons from '~/components/global/socialMedia/Icons'

export default {
  name: 'index',
  components: {
    Icons
  }

}
</script>

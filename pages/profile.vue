<template>
  <v-main>

    <general-cover :height='273' v-if='$vuetify.breakpoint.smAndUp' />

    <v-container class='relative z-index-2' :class="$vuetify.breakpoint.smAndUp ? 'positionFix' : 'mt-2'">
      <v-row>

        <v-col cols='12' md='3'>

          <template v-if='$vuetify.breakpoint.smAndDown ? mobile : true'>
            <user-card />
          </template>

        </v-col>

        <v-col cols='12' md='9'>
          <template v-if='$vuetify.breakpoint.smAndDown ? !mobile : true'>

            <v-card elevation='6' class='mb-3 pa-5'>

              <div v-if='$vuetify.breakpoint.smAndDown' @click='showUserCard' class='pointer'>
                <v-icon v-text="'mdi-arrow-left'" />
              </div>

              <nuxt-child />

            </v-card>

          </template>
        </v-col>

      </v-row>
    </v-container>

  </v-main>

</template>

<script>
import UserCard from '~/components/page/profile/UserCard'
import GeneralCover from '~/components/global/covers/GeneralCover'

export default {
  name: 'profile',

  components: {
    GeneralCover,
    UserCard
  },

  computed: {
    mobile() {
      return this.$store.state.profileMobileToggle && ['xs', 'sm'].includes(this.$vuetify.breakpoint.name)
    }
  },

  methods: {
    showUserCard() {
      this.$store.commit('showHideProfile', true)
    }
  }

}
</script>

<style lang='scss'>
.positionFix {
  margin-top: -180px;
}
</style>

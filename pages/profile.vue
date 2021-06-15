<template>
  <v-main>

    <general-cover :height='273' v-if='$vuetify.breakpoint.smAndUp' />

    <v-container class='relative z-index-2' :class="$vuetify.breakpoint.smAndUp?'positionFix':'mt-2'">
      <v-row>

        <v-col cols='12' md='3'>

          <!--
           <v-card class='pa-5'>
            <div v-if='$vuetify.breakpoint.mdAndDown'>oktay</div>
            <div v-if='$vuetify.breakpoint.smAndDown'>tontas</div>
            <div v-if='$vuetify.breakpoint.xs'>tnts</div>
          </v-card>-->

          <user-card />
        </v-col>


        <v-col cols='12' md='9' >
          <nuxt-child />
        </v-col>

      </v-row>
    </v-container>

  </v-main>

</template>

<script>
import UserCard from '~/components/page/profile/UserCard'
import GeneralCover from '~/components/global/GeneralCover'

export default {
  name: 'profile',
  components: {
    GeneralCover,
    UserCard
  },
  computed:{
    toggleProfileMobile(){
      return this.$store.state.profileToggle
    }
  }
}
</script>

<style lang='scss'>
.positionFix {
  margin-top: -180px;
}
</style>

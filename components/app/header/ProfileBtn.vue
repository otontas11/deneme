<template>
  <v-menu offset-y left open-on-hover transition='slide-y-transition'>
    <template #activator='{ on, attrs }'>

      <client-only>
        <v-btn :outlined='$vuetify.breakpoint.mdAndUp'
               :rounded='$vuetify.breakpoint.smAndDown'
               :height='40'
               class='px-1 px-md-4 ml-md-4 ' min-width='36'
               v-bind='attrs' v-on='on' text>

          <v-icon v-text="'mdi-account-circle'"
                  :size='$vuetify.breakpoint.smAndDown ? 30 : 20' dark
                  :left='$vuetify.breakpoint.mdAndUp' />

          <client-only>
            <template>
              Profile
            </template>
          </client-only>

        </v-btn>
      </client-only>


    </template>

    <v-list dense width='100%' class='py-0'>

      <v-list-item active-class='primary--text' :to='localePath("/profile/",$i18n.locale)' >

        <v-list-item-avatar color='bg'>
          <v-icon v-text='`mdi-exit-to-app`' />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="$t('myProfile')" />
        </v-list-item-content>

      </v-list-item>

      <v-list-item active-class='primary--text' @click='signOut'>

        <v-list-item-avatar color='bg'>
          <v-icon v-text='`mdi-exit-to-app`' />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="$t('exit')" />
        </v-list-item-content>

      </v-list-item>
    </v-list>

  </v-menu>
</template>

<script>
export default {
  name: 'User',
  data() {
    return {
    }

  },
  methods: {
    signOut() {
      this.$router.push(this.localePath("/",this.$i18n.locale))
      this.$store.commit('profile/isUserLogged',false)
    }
  }
}
</script>

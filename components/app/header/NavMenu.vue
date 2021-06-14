<template>
  <nav class='d-flex align-center footer'>

    <template v-for='(menu, i) in mainNav'>
      <v-btn :key='`nav-menu-${i}`'
             :to='localePath(menu.path, $i18n.locale)'
             @click='checkClick(menu.path)'
             exact-active-class='secondary--text'
             class='mainNav ' rounded text plain>

        <v-icon v-text='` mdi-${menu.icon}` ' :size='18'
                :class="$vuetify.breakpoint.smAndUp?'mr-2':''"/>

        <span class='caption text-uppercase '> {{ $t(menu.name) }} </span>

      </v-btn>
    </template>

    <template v-if='$vuetify.breakpoint.smAndDown'>

      <v-btn rounded text plain class='mainNav'>

        <v-icon v-text='`mdi-magnify` ' :size='18' />
        <span class='caption text-uppercase'> {{ $t('navbar.search') }} </span>

      </v-btn>

      <v-btn rounded text plain
             :to='localePath("profile", $i18n.locale)'
             @click='checkClick("profile")'
             exact-active-class='secondary--text'
             class='mainNav'>

        <v-icon v-text='`mdi-account-outline` ' :size='18' />

        <span class='caption text-uppercase'> {{ $t('navbar.profile') }} </span>

      </v-btn>

    </template>

  </nav>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'NavMenu',
  data() {
    return {
      clicked: false
    }
  },

  computed: {
    ...mapState({ mainNav: state => state.main.userMenu })
  },

  methods: {
    checkClick(path) {
      console.log('', this.$route.path.includes(path))
      this.clicked = this.$route.path.includes(path)
    }
  }

}
</script>

<style lang='scss'>

@media screen and (max-width: 958.8px) {
  .mainNav {
    span {
      display: flex;
      flex-direction: column;
    }
  }

  nav.footer {
    margin: auto;
  }
}

</style>

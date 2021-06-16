<template>
  <v-card :elevation="$vuetify.breakpoint.smAndUp?'6':'0'" class='mb-3 userCardTop'>

    <div class='pa-6 whiteBackground' v-if='$vuetify.breakpoint.smAndUp'>
      <span class='d-block text-uppercase caption font-weight-500'>{{ $t('welcome') }}</span>
      <span class='d-block  font-weight-700'>{{ name }}</span>
    </div>

    <v-list flat class='px-6 pb-6'>

      <template v-for='(menu, i) in profileMenu'>
        <v-card flat class='userCard' :class="{'mb-4':$vuetify.breakpoint.smAndDown}" @click='getSelected'>
          <v-list-item :to='localePath(menu.path, $i18n.locale)' exact exact-active-class='gray'
                       :key='`user-menu-${i}`'>

            <v-list-item-content>
              <v-list-item-title v-text='$t(menu.name)' />
            </v-list-item-content>

            <v-list-item-icon>
              <v-icon v-text="'mdi-arrow-right'" />
            </v-list-item-icon>

          </v-list-item>
        </v-card>

      </template>

      <template v-if='$vuetify.breakpoint.smAndDown'>
        <span v-text="$t('language')" class='text-uppercase font-weight-600 d-block mb-2 font-size-10' />
        <div class='fill-width '>
          <language-choice fillWidth='fill-width' />
        </div>

      </template>

    </v-list>
  </v-card>
</template>

<script>
import LanguageChoice from '~/components/app/header/Language'

export default {
  name: 'UserCard',
  components: {
    LanguageChoice
  },
  data() {
    return {
      name: 'Enes Aktaş',
      isSelected: false
    }
  },

  computed: {
    profileMenu() {
      return this.$store.state.main.profileMenu
    }
  },
  methods: {
    getSelected() {
      this.$store.commit('showHideProfile',false)
    }
  }
}
</script>

<style lang='scss' scoped>

.userCard {
  border: none !important;
  @media (max-width: 959.8px) {
    border: 1px solid #EBEEF3 !important;
  }
}

.userCardTop {
  @media (max-width: 959.8px) {
    border: none !important;
  }
}

</style>

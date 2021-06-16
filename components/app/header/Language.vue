<template>
  <v-menu transition='slide-y-transition full-width'

          offset-y :open-on-hover='$vuetify.breakpoint.mdAndUp' rounded='lg'>

    <template #activator='{ on }'>
      <v-btn text rounded outlined class='mr-1 px-2 soft--text language' :class='fillWidth' min-width='auto'
             :height='$vuetify.breakpoint.mdAndUp?40:48' v-on='on'>

                <span class='pr-md-2 pl-2 pl-md-0'
                      :class="{'text-transform-none': $vuetify.breakpoint.smAndDown}"
                      v-text='localeName($i18n.locale)' />
        <v-icon right dark>
          mdi-menu-down
        </v-icon>

      </v-btn>
    </template>

    <v-card flat>
      <v-list dense>
        <v-list-item v-for='locale in $i18n.locales' :key='locale.code'
                     @click='setLang(locale.code)'
                     :to='switchLocalePath(locale.code)'>

          <v-list-item-icon class='mr-3'>
            <img :src='`https://flag.pk/flags/4x3/` + locale.code2 + `.svg`'
                 width='24' height='16' class='rounded mt-1' :alt='locale.iso' />
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text='locale.name' />
          </v-list-item-content>

          <v-list-item-icon v-if='$i18n.locale === locale.code'>
            <v-icon v-text="'mdi-check'" color='primary' />
          </v-list-item-icon>

        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: 'Language',
  props: {
    fillWidth: {
      type: String
    }
  },
  methods: {

    setLang(lang) {
      this.$i18n.locale = lang
      this.$vuetify.lang.current = lang
      this.$storage.setCookie('language', lang)
      this.$axios.setHeader('content-language', lang)
      this.$axios.setHeader('accept-language', lang)
    },

    localeName(code) {
      return this.$i18n.locales.find(lang => lang.code === code)?.name
    },

    localeCode(code) {
      return this.$i18n.locales.find(lang => lang.code === code)?.code2
    }

  }
}
</script>

<style lang='scss' scoped>
@media (max-width: 959.8px) {

  .v-btn.language {
    width: 100%;
    justify-content: space-between;
    border: 1px solid #EBEEF3 !important;

  }

}

</style>

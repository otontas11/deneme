<template>
  <v-card elevation='6' rounded='lg' class='mb-3'>
    <div class='pa-6 whiteBackground'>
      <span class='d-block text-uppercase caption font-weight-500'>{{ $t('welcome') }}</span>
      <span class='d-block  font-weight-700'>{{ name }}</span>

    </div>
    <v-list flat class='px-6 pb-6'>

      <template v-for='(menu, i) in profileMenu'>
        <v-card flat class='userCard'>
          <v-list-item :to='localePath(menu.path, $i18n.locale)' exact
                        exact-active-class='gray' :key='`user-menu-${i}`'>

            <v-list-item-content>
              <v-list-item-title v-text='$t(menu.name)' />
            </v-list-item-content>

            <v-list-item-icon>
              <v-icon v-text="'mdi-arrow-right'" />
            </v-list-item-icon>

          </v-list-item>
        </v-card>

      </template>

    </v-list>
  </v-card>
</template>

<script>

export default {
  name: 'UserCard',
  data() {
    return {
      name:'Enes Aktaş',
      isSelected: false
    }
  },

  computed: {
    profileMenu() {
      return this.$store.state.main.profileMenu
    }
  }
}
</script>

<style lang='scss' scoped>
.userCard {
  border: none !important;
}
</style>

<template>
  <v-card elevation='6' rounded='lg' class='mb-3'>
    <div class='pa-6 whiteBackground'>
      <span class='d-block text-uppercase caption font-weight-500'>Welcome</span>
      <span class='d-block  font-weight-700'>Muhammed Ali</span>

    </div>
    <v-list flat class='px-6 pb-6'>

      <template v-for='(menu, i) in profileMenu'>
        <v-card outlined class='gray'>
          <v-list-item :to='localePath(menu.path, $i18n.locale)' exact
                       @click='addBorder'
                       class='px-0' active-class='primary--text' :key='`user-menu-${i}`'>

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
  data(){
    return{
      isSelected:false
    }
  },

  computed: {
    profileMenu() {
      return this.$store.state.main.profileMenu
    }
  },
  methods:{
    addBorder(){

    }
  }
}
</script>

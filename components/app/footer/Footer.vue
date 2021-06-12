<template>
  <v-footer dark padless >
    <v-card class='flex primary' flat  tile height='176'>
      <v-card-title >
        <strong class='subheading'>Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn v-for='icon in icons'
               :key='icon'
               class='mx-4'
               dark
               icon  >
          <v-icon size='24px'>
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>


    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram'
      ]
    }
  }
}
</script>

<style scoped>

</style>

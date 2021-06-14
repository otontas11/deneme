<template>
  <v-card style='border:1px solid #EBEEF3 !important;' class='mx-auto' color='#F8F9FB'>

    <v-card-actions>
      <v-list-item>

        <v-list-item-content v-if='$vuetify.breakpoint.mdAndUp'>
          <v-list-item-title class='font-weight-600'>What is Islam?</v-list-item-title>
        </v-list-item-content>

        <v-row align='center' :class="$vuetify.breakpoint.mdAndUp?' justify-end':'justify-start'">
          <v-avatar class='ma-3' size='88' tile v-if='$vuetify.breakpoint.mdAndDown'>
            <v-img
              class='white--text align-end'
              :width='88'
              :height='88'
              src='https://cdn.vuetifyjs.com/images/cards/docks.jpg'
            />
          </v-avatar>

          <div class='date d-flex flex-column align-end'>
            <span class='subheading font-weight-600'>You’re started at</span>
            <span class='subheading'>21.04.2021</span>
          </div>

          <div class='progressBar mx-4'>
            <v-progress-circular :rotate='360'
                                 :size='48'
                                 :width='4'
                                 :value='value'
                                 color='#31BC81'>
              {{ value }}
            </v-progress-circular>
          </div>

          <div class='courseBtn'>
            <v-btn class='ma-2'
                   outlined
                   color='secondary'>
              {{ $t('myCourses.viewCourse') }}
            </v-btn>
          </div>

        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'card',
  data() {
    return {
      value: 15
    }
  }
}
</script>

<style scoped>

</style>

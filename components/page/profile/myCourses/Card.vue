<template>
  <v-card style='border:1px solid #EBEEF3 !important;' elevation='1' class='mx-auto mb-4 mb-md-6 ' color='#F8F9FB'>
    <v-card-actions>
      <v-list-item>

        <span class='font-weight-bold body-1'  v-if='!$vuetify.breakpoint.xsOnly' style='max-width: 400px'>{{ title }}</span>

        <v-row align='center' :class="$vuetify.breakpoint.smAndUp?' justify-end':'justify-start'">

          <div class='d-flex justify-space-between align-top nowrap'>

            <v-avatar class='mx-3 ' rounded size='88' tile v-if='$vuetify.breakpoint.xsOnly'>
              <v-img class='white--text align-end'
                     :width='88'
                     :height='88'
                     src='https://cdn.vuetifyjs.com/images/cards/docks.jpg' />
            </v-avatar>

            <div class='d-flex flex-column justify-start'>

              <span class='font-weight-bold body-1' v-if='$vuetify.breakpoint.xsOnly'>{{title}}</span>

              <div class='d-flex' :class="{'justify-space-between':$vuetify.breakpoint.xsOnly}">

                <div class='date d-flex flex-column' :class="{'align-end':$vuetify.breakpoint.smAndUp}">
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

              </div>

            </div>

          </div>

          <div class='courseBtn' :class="{'fill-width':$vuetify.breakpoint.xsOnly}">
            <v-btn class='ma-2 '
                   :class="{'fill-width':$vuetify.breakpoint.xsOnly}"
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
      value: 15,
      title:'What is IslamWhat is IslamWhat is hat is Islam?'
    }
  }
}
</script>

<style scoped>

</style>

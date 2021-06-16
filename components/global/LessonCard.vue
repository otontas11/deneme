<template>

  <v-card class='mx-auto mb-6' max-width='374' elevation='1'>

    <v-img height='134' :src='img'>
      <div class='progressBar mx-4'>

        <div v-if='percent' class='mt-4' style='border-radius: 100%;background-color: #0A2540;width: 48px;height: 48px'>
          <v-progress-circular :rotate='360'
                               :size='48'
                               :width='4'
                               :value='25'
                               color='#31BC81'>
            <div class='d-flex flex-column align-center mt-1'>
              <span class='white--text caption ' style='margin-bottom: -8px'> %{{ percent }}</span>
              <span class='white--text mb-1 ' style='font-size: 10px'> Comp.</span>
            </div>
          </v-progress-circular>
        </div>

      </div>

    </v-img>

    <div class='px-2 pb-4'>

      <v-card-title>{{ title }}</v-card-title>

      <v-card-text style='margin-bottom: -8px'>

        <div class='text-subtitle-2 text-uppercase'>
          {{ $t('startDate') }}
        </div>

        <div class='text-subtitle-1 text-uppercase'>
          {{ date }}
        </div>
        <div class='fill-width'>
          <v-btn class='mt-4 ' :class="{'fill-width':$vuetify.breakpoint.smAndDown}" color='secondary ' outlined :height='40'>
            {{ btnName }}
          </v-btn>
        </div>

      </v-card-text>

    </div>
  </v-card>
</template>


<script>
export default {
  name: 'LessonCard',
  props: {
    img:{
      type:String
    },
    percent: {
      type: String
    },
    title: {
      type: String
    },
    date: {
      type: String
    },
    btnName:{
      type:String
    }
  }
}
</script>

<style scoped>

</style>

<template>

  <v-card class='mx-auto mb-6' max-width='374' elevation='1'>

    <div :class="{'d-flex' : $vuetify.breakpoint.smAndDown}">

    <v-img rounded :height="$vuetify.breakpoint.smAndDown ? '100' : '134'"
           :width="$vuetify.breakpoint.smAndDown?'40%':'100%'"
           class='mt-1 mt-sm-0 ml-1 ml-sm-0 lessonCardImg'
           :src='img'>

      <div class='progressBar mx-4'>

        <div v-if='percent' class='mt-4' style='border-radius: 100%;background-color: #0A2540;width: 48px;height: 48px'>
          <v-progress-circular :rotate='360'
                               :size='48'
                               :width='4'
                               :value='25'
                               color='#31BC81'>
            <div class='d-flex flex-column align-center mt-1'>
              <span class='white--text caption ' style='margin-bottom: -8px'> %{{ percent }}</span>
              <span class='white--text mb-1 mt-1 ' style='font-size: 10px'> {{ percentType }}</span>
            </div>
          </v-progress-circular>
        </div>

      </div>

    </v-img>

    <div class='px-2'>

      <span v-if='endDate && $vuetify.breakpoint.mdAndUp' class=' text-uppercase font-weight-bold d-block  ml-4 mt-6 '
            style='font-size: 10px'>
        TILL {{ endDate }}

      </span>
      <span v-if='date && $vuetify.breakpoint.mdAndUp' class=' text-uppercase font-weight-bold d-block  ml-4 mt-6 '
            style='font-size: 10px'>
      {{ date }}
      </span>

      <v-card-title :class="{'py-1 px-1' : $vuetify.breakpoint.smAndDown}" style='line-height: 25px'>{{ title }}</v-card-title>
      <v-card-text v-if='subTitle' style='margin-bottom: -2rem'>{{ subTitle }}</v-card-text>

      <ul  v-for='(list,i) in listTitles' class='ml-2 ml-md-6' >
        <li :key='`list-${i}`'>{{ list }}</li>
      </ul>

      <v-card-text style='margin-bottom: -8px'>

        <template>
          <div class='text-subtitle-2 text-uppercase' v-if='startDate'>
            {{ $t('startDate') }}
          </div>

          <div class='text-subtitle-1 text-uppercase'>
            {{ startDate }}
          </div>
        </template>

      </v-card-text>

    </div>

    </div>

    <div class='fill-width px-4 mb-2'>
      <v-btn class='mt-4' :class="{'fill-width' : $vuetify.breakpoint.smAndDown}" color='secondary ' outlined
             :height='40'>
        {{ btnName }}
      </v-btn>
    </div>

  </v-card>
</template>

<script>
export default {
  name: 'LessonCard',
  props: {
    img: {
      type: String
    },
    percent: {
      type: String
    },
    percentType: {
      type: String
    },
    title: {
      type: String
    },
    subTitle: {
      type: String
    },
    date: {
      type: String
    },
    startDate: {
      type: String
    },
    btnName: {
      type: String
    },
    endDate: {
      type: String
    },
    listTitles: {
      type: Array
    }
  }
}
</script>

<style lang='scss' scoped>
.lessonCardImg {
  border-radius: 4px 4px 0 0;
  @media (max-width: 959.8px) {
    border-radius: 4px;
  }
}
</style>

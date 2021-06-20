<template>
  <v-row>
       <v-col cols='12'  md='4' lg='3'  >
        <lesson-card :percent='percent'
                     :percent-type='percentType'
                     :title='title'
                     :endDate='endDate'
                     :btn-name='btnName'
                     :list-titles='listTitles'
                     :img='img' />
      </v-col>


  </v-row>
</template>

<script>

import LessonCard from '~/components/global/LessonCard'

export default {

  name: 'Courses',

  components: {
    LessonCard
  },

  data() {
    return {
      percent: '23',
      percentType: 'Filled',
      title: 'The 5 Pillars of Islam lorem ipsum sit',
      endDate: '21.04.2021',
      btnName: this.$t('myCourses.viewCourse'),
      img: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      listTitles: ['Visit', ' What’s religion?', ' Cibril event', ' +5 More Subjects']
    }
  }

}
</script>

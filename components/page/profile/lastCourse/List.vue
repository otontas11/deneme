<template>

  <div>

    <v-card-title>{{ $t('lastCourse.title') }}</v-card-title>

    <v-card-text>

      <v-divider class='mb-2' />

      <v-row>
        <v-col cols='12' md='4' sm='6' v-for='i in 5'>

          <last-course-lesson-card :percent='percent' :title='title' :date='date' :btnName='btnName' :img='img' />

        </v-col>

      </v-row>

    </v-card-text>

  </div>

</template>

<script>
import LastCourseLessonCard from '~/components/global/LessonCard'

export default {
  name: 'List',
  components: {
    LastCourseLessonCard
  },
  data() {
    return {
      percent: '23',
      title: 'The 5 Pillars of Islam lorem ipsum sit',
      date: '21.04.2021',
      btnName: this.$t('myCourses.viewCourse'),
      img: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
    }
  }
}
</script>

<template>
  <v-row>
    <template v-for='i in 5'>

      <v-col cols='12' md='4' lg='3' sm='6'>
        <lesson-card :title='title'
                     :date='date'
                     :btn-name='btnName'
                     :sub-title='subTitle'
                     :img='img' />
      </v-col>

    </template>
  </v-row>
</template>

<script>
import LessonCard from '~/components/global/LessonCard'

export default {
  name: 'search-news',
  components: {
    LessonCard
  },
  data() {
    return {

      title: 'The 5 Pillars of Islam lorem ipsum sit',
      date: '21.04.2021',
      btnName: 'Read More',
      img: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      subTitle: 'What is the religion that is practiced by 1.6 billion people around the world?'
    }
  }
}
</script>

<style scoped>

</style>

<template>

    <v-card class='transparent'>

      <div v-if='$vuetify.breakpoint.smAndDown' @click='$router.go(-1)' class='pointer mb-4'>
        <v-icon v-text="'mdi-arrow-left'" />
      </div>

      <v-row>
        <v-col cols='12' md='4' lg='3' sm='6' v-for='i in 6'>

          <lesson-card :percent='percent' :key='`sad-${i}`'
                       :percent-type='percentType'
                       :title='title'
                       :date='date'
                       :btn-name='btnName'
                       :subTitle='subTitle'
                       :img='img' />
        </v-col>
      </v-row>
    </v-card>
</template>

<script>
import LessonCard from '~/components/global/LessonCard'

export default {
  name: 'news-wrap',
  components: {
    LessonCard
  },
  data() {
    return {
      percent: '23',
      percentType: 'Filled',
      title: 'The 5 Pillars of Islam lorem ipsum sit',
      date: '21.04.2021',
      btnName: 'Read More',
      subTitle: 'What is the religion that is practiced by 1.6 billion people around the world?',
      img: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      path: '/news/id'

    }
  }
}
</script>

<style scoped>

</style>

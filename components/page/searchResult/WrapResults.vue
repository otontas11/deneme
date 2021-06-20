<template>
  <div>

    <v-container>
      <v-tabs v-model='tab' background-color='transparent' :height='30'>
        <v-tab v-for='item in items' :key='item'>
          {{ item }}
        </v-tab>

      </v-tabs>
    </v-container>

    <v-divider />

    <v-container>
      <v-tabs-items v-model='tab' >

        <v-tab-item>
          <courses-result/>
        </v-tab-item>

        <v-tab-item>
          <news-result/>
        </v-tab-item>

        <v-tab-item>
          <questions-result/>
        </v-tab-item>

      </v-tabs-items>
    </v-container>

  </div>
</template>

<script>
import CoursesResult from '~/components/page/searchResult/Courses'
import NewsResult from '~/components/page/searchResult/News'
import QuestionsResult from '~/components/page/searchResult/Questions'

export default {
  name: 'results',
  components: {
    CoursesResult, NewsResult, QuestionsResult
  },
  data() {
    return {
      tab: 0,
      items: ['Courses', 'News', 'Questions']
    }
  }
}
</script>

<style scoped>
.v-responsive__content{
  width: initial!important;
}

</style>

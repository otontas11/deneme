<template>

  <v-card class='transparent'>

    <v-row>
      <v-col cols='12' md='4' lg='3' sm='6' v-for='i in 6'>

        <question-card :path='path' :key='`question-card-${i}`' />

      </v-col>
    </v-row>


  </v-card>

</template>

<script>

import QuestionCard from '~/components/global/QuestionCard'

export default {
  name: 'questions-wrap',

  components: {
    QuestionCard
  },
  data() {
    return {
      path: '/questions/id'
    }
  }
}
</script>

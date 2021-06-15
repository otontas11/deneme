<template>
  <v-card elevation='6' class='mb-3 pa-5'>

    <v-card-title>{{ $t('settings.myQuestions') }}</v-card-title>

    <v-card-text>

      <v-divider class='mb-4' />

      <v-row>
        <v-col cols='12' md='6' lg='3'  v-for='i in 5'>
          <question-card :key='i'/>

        </v-col>
      </v-row>
    </v-card-text>

  </v-card>
</template>

<script>
import QuestionCard from './Card'

export default {
  name: 'Wrap',
  components: {
    QuestionCard
  }
}
</script>

<style scoped>

</style>

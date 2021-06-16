<template>
  <div>

    <div class='d-flex justify-space-between'>
      <v-card-title>{{ $t('settings.myQuestions') }}</v-card-title>
      <ask-questions  v-if='$vuetify.breakpoint.mdAndUp'/>
    </div>

    <v-card-text>

      <v-divider class='mb-4' />


      <v-tabs v-model='tab' background-color='transparent' grow>
        <v-tab v-for='item in items' :key='item'>
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model='tab'>

        <v-tab-item class='mt-4'>
          <v-row>
            <v-col cols='12' md='6' lg='3' v-for='i in 5'>
              <question-card :key='i' />

            </v-col>
          </v-row>
        </v-tab-item>

        <v-tab-item class='mt-4'>
          <v-row>
            <v-col cols='12' md='6' lg='3' v-for='i in 2'>
              <question-card :key='i' />
            </v-col>
          </v-row>
        </v-tab-item>

      </v-tabs-items>

    </v-card-text>

    <div class='ml-4'>
      <ask-questions v-if='$vuetify.breakpoint.smAndDown' />
    </div>

  </div>
</template>

<script>
import QuestionCard from './Card'
import AskQuestions from '~/components/global/dialog/AskQuestions'
export default {
  name: 'Wrap',
  components: {
    QuestionCard,
    AskQuestions
  },
  data() {
    return {
      tab: 0,
      items: ['Answered', 'Unanswered']
    }
  },

}
</script>

<style scoped>

</style>

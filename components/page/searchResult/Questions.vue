<template>
<v-row>
  <template v-for='i in 5'>
    <v-col cols='12' md='4' lg='3' sm='6'>
      <question-card/>
    </v-col>
  </template>

</v-row>
</template>

<script>
import QuestionCard from '~/components/global/QuestionCard'
export default {
  name: 'Questions',
  components:{
    QuestionCard
  }
}
</script>

<style scoped>

</style>

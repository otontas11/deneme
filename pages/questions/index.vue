<template>
  <v-main>
    <general-cover v-if='$vuetify.breakpoint.mdAndUp'
                   :cover='cover' :headerText='headerText' :subText='subText' :btnText='btnText' />

    <v-container>
      <questions-list />
    </v-container>

  </v-main>
</template>

<script>
import GeneralCover from '~/components/global/covers/GeneralCover'
import QuestionsList from '~/components/page/questions/List'

export default {
  name: 'Question-page',
  components: {
    QuestionsList,
    GeneralCover
  },
  data() {
    return {
      headerText: this.$t('questionsPage.title'),
      subText: this.$t('questionsPage.subTitle'),
      btnText: this.$t('questionsPage.askYourQuestion'),
      cover: require('@/static/cover.jpg')
    }
  }
}
</script>

<style scoped>

</style>

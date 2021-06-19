<template>
  <v-main>
    <general-cover v-if='$vuetify.breakpoint.mdAndUp'
                   :cover='cover' :headerText='headerText' :subText='subText' :btnText='btnText' />

    <v-container class='py-6 py-md-16 '>

      <h3 v-if='$vuetify.breakpoint.smAndDown' v-text='headerText' class='text-h5   mb-6  mt-4 mt-mb-10 font-weight-bold font-weight-500' />
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

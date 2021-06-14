<template>
  <v-main>
    <general-cover v-if='$vuetify.breakpoint.mdAndUp'
                   :cover='cover' :headerText='headerText' :subText='subText' :btnText='btnText'/>
  </v-main>
</template>

<script>
import GeneralCover from '~/components/global/GeneralCover'
export default {
  name: 'Question-page',
  components:{
    GeneralCover
  },
  data(){
    return{
      headerText:this.$t('myQuestions.title'),
      subText:this.$t('myQuestions.subTitle'),
      btnText:this.$t('myQuestions.askYourQuestion'),
      cover:require('@/static/cover.jpg')
  }
  }
}
</script>

<style scoped>

</style>

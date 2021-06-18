<template>
  <v-main>
    <general-cover v-if='$vuetify.breakpoint.mdAndUp'
                   :cover='cover' :headerText='headerText' :subText='subText' :btnText='btnText'/>
  </v-main>
</template>

<script>
import GeneralCover from '~/components/global/covers/GeneralCover'
export default {
  name: 'Question-page',
  components:{
    GeneralCover
  },
  data(){
    return{
      headerText:this.$t('questionsPage.title'),
      subText:this.$t('questionsPage.subTitle'),
      btnText:this.$t('questionsPage.askYourQuestion'),
      cover:require('@/static/cover.jpg')
  }
  }
}
</script>

<style scoped>

</style>

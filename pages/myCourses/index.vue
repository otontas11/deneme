<template>
  <v-main>
   <general-cover v-if='$vuetify.breakpoint.mdAndUp'
                  :headerText='headerText' :subText='subText' :cover='cover' />
  </v-main>
</template>

<script>
import GeneralCover from '~/components/global/GeneralCover'
export default {
  name: 'index',
  components:{
    GeneralCover
  },
  data(){
    return{
      headerText:this.$t('myCourses.title'),
      subText:this.$t('myCourses.subTitle'),
      cover:require('@/static/cover.jpg')
    }
  }
}
</script>

<style scoped>

</style>

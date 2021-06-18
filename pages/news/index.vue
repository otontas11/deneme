<template>
  <v-main>

    <general-cover v-if='$vuetify.breakpoint.mdAndUp'
                   :headerText='headerText' :subText='subText' :cover='cover' />
    <news-list/>
  </v-main>
</template>

<script>
import GeneralCover from '~/components/global/covers/GeneralCover'
import NewsList from '~/components/page/news/List'

export default {
  name: 'news-page',
  components:{
    GeneralCover,NewsList
  },
  data(){
    return{
      headerText:this.$t('news.title'),
      subText:this.$t('news.subTitle'),
      cover:require('~/static/cover.jpg')
    }
  }
}
</script>

<style scoped>

</style>

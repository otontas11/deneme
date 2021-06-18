<template>

  <v-main>
    <general-cover :cover='cover' :header-text='headerText' :sub-text='subText' />

    <search-wrap-results />

  </v-main>

</template>


<script>
import GeneralCover from '~/components/global/covers/GeneralCover'
import SearchWrapResults from '@/components/page/searchResult/WrapResults'

export default {
  name: 'search-page',
  components: {
    GeneralCover,
    SearchWrapResults
  },
  data() {
    return {
      cover: require('@/static/cover.jpg'),
      headerText: 'Search result',
      subText: 'We found “24” result for “Islam”'
    }
  }
}
</script>

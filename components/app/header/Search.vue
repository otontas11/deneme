<template>
  <v-autocomplete v-model='select'
                  :items='items'
                  :search-input.sync='search'
                  cache-items outlined
                  label='Search'
                  hide-details
                  :height='40'
                  flat solo class='mx-4'
                  append-icon='mdi-arrow'>

    <template #no-data>

        <v-list-item>
          <v-list-item-title>{{ $t('notFound') }}</v-list-item-title>
        </v-list-item>

    </template>


  </v-autocomplete>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
      states: [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Palau',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South Carolina',
        'South Dakota'
      ]
    }
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val)
    }
  },
  methods: {
    querySelections(v) {
      setTimeout(() => {
        this.items = this.states.filter(e => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
      }, 500)
    }
  }
}
</script>

<style lang='scss'>
.v-autocomplete__content .v-list__tile{
  height: 30px!important;
}

</style>

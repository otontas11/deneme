<template>
  <v-card elevation='6' class='mb-3 pa-1 pa-md-5'>

    <v-card-title>{{ $t('settings.accSettings') }}</v-card-title>

    <v-card-text>

      <v-divider class='mb-4' />

      <template v-for='i in 5'>
        <course-card />
      </template>

    </v-card-text>

  </v-card>
</template>

<script>
import CourseCard from './Card'

export default {
  name: 'Wrap',
  components: {
    CourseCard
  }
}
</script>

<style scoped>

</style>

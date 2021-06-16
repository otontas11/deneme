<template>
  <div>

    <v-card-title>{{ $t('settings.accSettings') }}</v-card-title>

    <v-card-text>

      <v-divider class='mb-4' />

      <template v-for='i in 5'>
        <course-card />
      </template>

    </v-card-text>

  </div>
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

<template>
  <v-main>

    <general-cover :height='273' />

    <v-container class='relative z-index-2' style='margin-top: -133px'>
      <v-row>

        <v-col cols='12' md='3'>
          <user-card />
        </v-col>

        <v-col cols='12' md='9'>
          <nuxt-child  />
        </v-col>

      </v-row>
    </v-container>

  </v-main>

</template>

<script>
import UserCard from '~/components/page/profile/UserCard'
import GeneralCover from '~/components/global/GeneralCover'

export default {
  name: 'profile',
  components: {
    GeneralCover,
    UserCard
  }
}
</script>

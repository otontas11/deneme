<template>
  <div class='d-flex'>
    <v-avatar v-for='(icons,i) in social'
              color='white'
              size='36'
              :key='`social-media-${i}`'
              class='mx-4 pointer '  >
      <v-icon size='24px' :color='`${icons.color}`'>
        {{ icons.icon }}
      </v-icon>
    </v-avatar>
  </div>

</template>

<script>
export default {
  name: 'Icons',
  computed: {
    social() {
      return this.$store.state.app.social_links
    }
  }
}
</script>

<template>
  <v-dialog v-model='dialog' fullscreen persistent width='auto'
            transition='dialog-bottom-transition'>

    <template #activator='{ on, attrs }'>

      <v-btn v-on='on' rounded text plain class='mainNav'>

        <v-icon v-text='`mdi-magnify` ' :size='18' />
        <span class='caption text-uppercase'> {{ $t('navbar.searchResult') }} </span>

      </v-btn>

    </template>

    <v-card>
      <v-card-title>

        <v-btn icon small @click='dialog = false' class='absolute top-0 right-0 ma-4 my-2'>
          <v-icon v-text="'mdi-close'" />
        </v-btn>

        <div class='mt-8 fill-width' >
          <search/>
        </div>

        <wrap-results />

      </v-card-title>

    </v-card>

  </v-dialog>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { minLength, required } from 'vuelidate/lib/validators'
import WrapResults from '~/components/page/searchResult/WrapResults'
import Search from '~/components/app/header/Search'

export default {
  name: 'SearchDetailed',
  components: {
    WrapResults,
    Search
  },
  mixins: [validationMixin],
  data() {
    return {
      question: null,
      dialog: false
    }
  },
  validations() {
    return {
      question: {
        required,
        minLength: minLength(50)

      }
    }
  },
  computed: {
    questionErrors() {
      const errors = []
      if (!this.$v.question.$dirty) return errors
      !this.$v.question.required && errors.push(this.$t('validations.requiredField'))
      !this.$v.question.minLength && errors.push(this.$t('validations.minCharacter', { n: 50 }))
      return errors
    }
  },
  methods: {
    askQuestion() {
      this.$v.$touch()
      console.log('::', this.$v)

      try {
        if (!this.$v.$anyError) {
          this.dialog = false

        }

      } catch (e) {
        console.log(e)
      }
    }

  }
}
</script>

<style scoped>

</style>

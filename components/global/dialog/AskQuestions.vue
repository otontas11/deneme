<template>
  <v-dialog v-model='dialog' max-width='420' :fullscreen='$vuetify.breakpoint.smAndDown' persistent width='auto'

            :transition="$vuetify.breakpoint.smAndDown ? 'dialog-bottom-transition' : 'dialog-transition'">

    <template #activator='{ on, attrs }'>

      <v-btn :class="{'fill-width':$vuetify.breakpoint.smAndDown}"
             :outlined='outlined' :depressed='outlined' :height='height' v-bind='attrs'
             v-on='on'
             color='secondary'>
        {{ $t('questionsPage.askYourQuestion') }}
      </v-btn>

    </template>

    <v-card>

      <v-card-title class='text-h5 lighten-2 font-weight-bold px-6 py-10'>

        <v-btn icon small @click='dialog = false' class='absolute top-0 right-0 ma-4 my-2'>
          <v-icon v-text="'mdi-close'" />
        </v-btn>

        <v-row>

          <v-card-subtitle class='font-weight-bold'>ASK YOUR QUESTİON</v-card-subtitle>

          <v-col cols='12' class='mt-4'>
            <v-textarea label='Ask Your Question' v-model='question'
                        outlined :error-messages='questionErrors' />
          </v-col>

          <v-col class='12'>
            <v-btn color='primary' @click='askQuestion' :height='48' class='fill-width'>
              Ask
            </v-btn>
          </v-col>

        </v-row>

      </v-card-title>

    </v-card>
  </v-dialog>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { minLength, required } from 'vuelidate/lib/validators'

export default {
  name: 'AskQuestions',
  mixins: [validationMixin],
  props: {
    outlined: {
      type: String,
      default: true
    },
    height: {
      type: Number,
      default: 48
    }


  },
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

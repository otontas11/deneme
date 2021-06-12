<template>
  <v-dialog v-model='dialog' width='420' persistent
            :fullscreen='$vuetify.breakpoint.smAndDown'
            :transition="$vuetify.breakpoint.smAndDown ? 'dialog-bottom-transition' : 'dialog-transition'">

    <template #activator='{ on, attrs }'>
      <v-btn :outlined='$vuetify.breakpoint.mdAndUp'
             :rounded='$vuetify.breakpoint.smAndDown'
             class='px-1 px-md-4 ml-md-4 primary' min-width='36'
             v-bind='attrs' v-on='on' dark text>

        <v-icon v-text="'mdi-account-circle'"
                :size='$vuetify.breakpoint.smAndDown ? 30 : 20' dark
                :left='$vuetify.breakpoint.mdAndUp' />

        <client-only>
          <template >
            {{ $t('signRegister') }}
          </template>
        </client-only>

      </v-btn>
    </template>

    <v-card>

      <v-card-title class='text-h5 lighten-2 font-weight-bold px-6 py-10'>

        <v-btn icon small @click='dialog = false' class='absolute top-0 right-0 ma-4'>
          <v-icon v-text="'mdi-close'" />
        </v-btn>

        <v-tabs v-model='tab' background-color='transparent' grow>
          <v-tab v-for='item in items' :key='item'>
            {{ item }}
          </v-tab>
        </v-tabs>

      </v-card-title>

      <v-tabs-items v-model='tab'>

        <v-tab-item>
          <v-card-text class='px-6 pt-0 pb-6'>

            <span v-text="$t('yourMail')" class='d-block mb-1 text-body-2' />
            <v-text-field v-model='form.email'
                          solo flat outlined type='email'
                          :error-messages='emailErrors' />

            <span v-text="$t('password')" class='d-block mb-1 text-body-2' />
            <v-text-field v-model='form.password'
                          solo flat outlined
                          :type='passwordType'
                          :append-icon="typePassword('password') ? 'mdi-eye-off' : 'mdi-eye'"
                          @click:append="changeType('password')"
                          :error-messages='passwordErrors' />

            <small v-text="$t('forgetPassword')" class='mb-4 primary--text d-block text-right lh-auto pointer' />

            <v-btn block depressed color='primary' height='48' class='text-transform-none' @click='registration'>
              {{ $t('login') }}
            </v-btn>

            <div class='d-flex justify-space-around align-center'>
              <small v-text="$t('dontHaveAccount')"
                     class='d-block text-center pt-7 pb-2 lh-auto' />
              <small v-text="$t('createAccount')"
                     class='d-block primary--text text-center pt-7 pb-2 lh-auto pointer'
                     @click='changePage' />
            </div>

          </v-card-text>
        </v-tab-item>

        <v-tab-item>
          <v-card-text class='px-6 pt-0 pb-6'>

            <span v-text="$t('yourMail')" class='d-block mb-1 text-body-2' />
            <v-text-field v-model='form.newEmail'
                          solo flat outlined type='email'
                          :error-messages='newEmailErrors'
            />

            <span v-text="$t('yourName')" class='d-block mb-1 text-body-2' />
            <v-text-field v-model='form.nameSurname'
                          solo flat outlined type='text'
                          :error-messages='nameSurnameErrors' />

            <span v-text="$t('password')" class='d-block mb-1 text-body-2' />
            <v-text-field v-model='form.newPassword'
                          solo flat outlined
                          :type='passwordType'
                          :append-icon="typePassword('password') ? 'mdi-eye-off' : 'mdi-eye'"
                          @click:append="changeType('password')"
                          :error-messages='newPasswordErrors' />

            <span v-text="$t('passwordCheck')" class='d-block mb-1 text-body-2' />
            <v-text-field v-model='form.passwordCheck'
                          solo flat outlined
                          :type='passwordType'
                          :append-icon="typePassword('password') ? 'mdi-eye-off' : 'mdi-eye'"
                          @click:append="changeType('password')"
                          :error-messages='passwordCheckErrors' />

            <v-btn block depressed color='primary' height='48' class='text-transform-none' @click='registration'>
              {{ $t('createAccount') }}
            </v-btn>

            <div class='d-flex justify-space-around align-center'>
              <small v-text="$t('hasAccount')"
                     class='d-block text-center pt-7 pb-2 lh-auto' />
              <small v-text="$t('login')"
                     class='d-block primary--text text-center pt-7 pb-2 lh-auto pointer'
                     @click='changePage' />
            </div>

          </v-card-text>
        </v-tab-item>

      </v-tabs-items>

    </v-card>
  </v-dialog>
</template>

<script>
import formValidations from '~/mixin/login/formValidations'

export default {
  name: 'Login',

  mixins: [formValidations],

  data() {
    return {

      form: {
        email: null,
        newEmail:null,
        nameSurname: null,
        password: null,
        newPassword: null,
        passwordCheck: null
      },
      tab: 0,
      items: ['Login', 'SignUp'],
      passwordCheckType: 'password',
      passwordType: 'password',
      dialog: false
    }
  },
  methods: {

    registration() {
      this.$v.form.$touch()
      console.log("::",this.$v)

      try {
        if (!this.$v.form.$anyError) {
          alert('tmm')
        }

      } catch (e) {
        console.log(e)
      }
    },

    changePage() {
      if (this.tab === 0)
        this.tab = 1
      else
        this.tab = 0
    },

    changeType(field) {
      this[`${field}Type`] = this.typePassword(field) ? 'text' : 'password'
    },
    typePassword(field) {
      return this[`${field}Type`] === 'password'
    }
  }
}
</script>

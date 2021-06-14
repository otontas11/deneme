<template>
  <v-card elevation='6' rounded='lg' class='mb-3'>
    <v-card-title>{{$t('settings.accSettings')}}</v-card-title>
    <v-card-text>
      <v-divider></v-divider>

      <v-form autocomplate='off' class='px-4 pt-4 px-md-6 pt-md-6'>

        <v-row>

          <v-col cols='12' md='6'>

            <v-text-field v-model='form.email' class="mb-2" label='Mail' outlined :error-messages='emailErrors' />

            <v-text-field v-model='form.nameSurname' class="mb-2" label='Name' outlined :error-messages='nameSurnameErrors' />

            <v-text-field v-model='form.password' type='password' class="mb-2" label='Password' outlined
                          :type='passwordType'
                          :append-icon="typePassword('password') ? 'mdi-eye-off' : 'mdi-eye'"
                          @click:append="changeType('password')"
                          :error-messages='passwordErrors' />

          </v-col>

          <v-col cols='12'>
            <v-btn depressed dark height='40' color='primary'
                   :block='$vuetify.breakpoint.xsOnly'
            @click='update'>
              {{ $t('settings.update') }}
            </v-btn>
          </v-col>

        </v-row>

      </v-form>

    </v-card-text>

  </v-card>
</template>

<script>
import settingValidations from '~/mixin/settings/settingValidations'
import { togglePassword } from '~/mixin/togglelPassword'

export default {
  name: 'account-settings',
  mixins: [settingValidations, togglePassword],
  data() {
    return {
      form: {
        email: 'mr.enesaktas@gmail.com',
        nameSurname: 'Enes Aktaş',
        password: '1234567890'
      }
    }
  },
  methods:{
    update(){
      this.$v.form.$touch()

      try {
        if (!this.$v.form.$anyError) {

          this.$router.push(this.localePath('profile',this.$i18n.locale))


        }

      } catch (e) {
        console.log(e)
      }
    }
  }

}
</script>

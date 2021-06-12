import { validationMixin } from 'vuelidate'
import { globalValidations } from '~/mixin/global'

import {
  required,
  requiredIf,
  minLength,
  maxLength,
  minValue,
  maxValue,
  email,
  numeric,
  not, sameAs
} from 'vuelidate/lib/validators'

const validations = {
  mixins: [validationMixin, globalValidations],
  validations() {
    return {
      form: {
        name: {
          required: requiredIf(function() {
            return this.form.tab === 0
          }),
          maxLength: maxLength(100),
          correct: function(name) {
            return this.correctAlpha(name)
          }
        },
        email: {
          required,
          email
        },
        password: {
          required,
          minLength: minLength(8)
        },
        newPassword: {
          required: requiredIf(function() {
            return this.form.tab === 1
          }),
          minLength: minLength(8),
          containsNumber: function(value) {
            return /^(?=.*\d)(?=.*[a-zA-Z])(?!.*\s).*$/.test(value)
          }
        },
        passwordCheck: {
          required: requiredIf(function() {
            return this.form.tab === 1
          }),
          sameAs: sameAs('newPassword')
        }

      }
    }
  },

  computed: {

    nameErrors() {
      const errors = []
      if (!this.$v.form.name.$dirty) return errors
      !this.$v.form.name.required && errors.push(this.$t('messages.requiredField'))
      !this.$v.form.name.maxLength && errors.push('En fazla 100 karakter girilebilir!')
      !this.$v.form.name.correct && errors.push('Sadece harf girebilirsiniz!')
      return errors
    },

    emailErrors() {
      const errors = []
      if (!this.$v.form.email.$dirty) return errors
      !this.$v.form.email.required && errors.push(this.$t('messages.requiredField'))
      !this.$v.form.email.email && errors.push('Email formatı doğru değil!')
      return errors
    },

    passwordErrors() {
      const errors = []
      if (!this.$v.form.password.$dirty) return errors
      !this.$v.form.password.required && errors.push('Mevcut şifrenizi girin!')
      !this.$v.form.password.minLength && errors.push('Şifreniz en az 8 karakterden oluşmalı !')
      !this.$v.form.password.isValid && errors.push('Mevcut şifre ile yeni şifre  aynı olmamalı !')
      return errors
    },

    newPasswordErrors() {
      const errors = []
      if (!this.$v.form.newPassword.$dirty) return errors
      !this.$v.form.newPassword.required && errors.push(this.$t('messages.requiredField'))
      !this.$v.form.newPassword.minLength && errors.push('En az 8 karakter girilmeli!')
      !this.$v.form.newPassword.containsNumber && errors.push('Şifreniz en az 8 karakterden oluşmalı ve en az bir harf ve rakam içermelidir!')

      return errors
    },

    passwordCheckErrors() {
      const errors = []
      if (!this.$v.form.passwordCheck.$dirty) return errors
      !this.$v.form.passwordCheck.required && errors.push('Şifrenizi tekrar girin!')
      !this.$v.form.passwordCheck.sameAs && errors.push('Lütfen şifrenizi aynı giriniz!')
      return errors
    }

  }
}

export default validations

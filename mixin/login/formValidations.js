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
        nameSurname: {
          required: requiredIf(function() {
            return this.tab === 1
          }),
          maxLength: maxLength(100),
          correct: function(name) {
            return this.correctAlpha(name)
          }
        },
        email: {
          required: requiredIf(function() {
            return this.tab === 0
          }),
          email
        },
        newEmail: {
          required: requiredIf(function() {
            return this.tab === 1
          }),
          email
        },
        password: {
          required: requiredIf(function() {
            return this.tab === 0
          }),
          minLength: minLength(8)
        },
        newPassword: {
          required: requiredIf(function() {
            return this.tab === 1
          }),
          minLength: minLength(8),
       /*   containsNumber: function(value) {
            return /^(?=.*\d)(?=.*[a-zA-Z])(?!.*\s).*$/.test(value)
          }*/
        },

        passwordCheck: {
          required: requiredIf(function() {
            return this.tab === 1
          }),
          sameAs: sameAs('newPassword')
        }

      }
    }
  },

  computed: {

    emailErrors() {
      const errors = []
      if (!this.$v.form.email.$dirty) return errors
      !this.$v.form.email.required && errors.push(this.$t('validations.requiredField'))
      !this.$v.form.email.email && errors.push(this.$t('validations.mailFormatWrong'))
      return errors
    },
    newEmailErrors() {
      const errors = []
      if (!this.$v.form.newEmail.$dirty) return errors
      !this.$v.form.newEmail.required && errors.push(this.$t('validations.requiredField'))
      !this.$v.form.newEmail.email && errors.push(this.$t('validations.mailFormatWrong'))
      return errors
    },

    nameSurnameErrors() {
      const errors = []
      if (!this.$v.form.nameSurname.$dirty) return errors
      !this.$v.form.nameSurname.required && errors.push(this.$t('validations.requiredField'))
      !this.$v.form.nameSurname.maxLength && errors.push('En fazla 100 karakter girilebilir!')
      !this.$v.form.nameSurname.correct && errors.push('Sadece harf girebilirsiniz!')
      return errors
    },
    passwordErrors() {
      const errors = []
      if (!this.$v.form.password.$dirty) return errors
      !this.$v.form.password.required && errors.push('Mevcut ??ifrenizi girin!')
      !this.$v.form.password.minLength && errors.push(this.$t('validations.minCharacter', { n: 8 }))
      return errors
    },

    newPasswordErrors() {
      const errors = []
      if (!this.$v.form.newPassword.$dirty) return errors
      !this.$v.form.newPassword.required && errors.push(this.$t('validations.requiredField'))
      !this.$v.form.newPassword.minLength && errors.push(this.$t('validations.minCharacter', { n: 8 }))
     // !this.$v.form.newPassword.containsNumber && errors.push('??ifreniz en az 8 karakterden olu??mal?? ve en az bir harf ve rakam i??ermelidir!')

      return errors
    },

    passwordCheckErrors() {
      const errors = []
      if (!this.$v.form.passwordCheck.$dirty) return errors
      !this.$v.form.passwordCheck.required && errors.push('??ifrenizi tekrar girin!')
      !this.$v.form.passwordCheck.sameAs && errors.push('??ifreler ayn?? de??il!')
      return errors
    }

  }
}

export default validations

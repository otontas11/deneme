import { validationMixin } from 'vuelidate'
import { globalValidations } from '~/mixin/global'

import { required, requiredIf, minLength, maxLength, email } from 'vuelidate/lib/validators'

const validations = {
  mixins: [validationMixin, globalValidations],

  validations() {
    return {
      form: {
        email: {
          required,
          email
        },
        nameSurname: {
          required,
          maxLength: maxLength(100),
          correct: function(name) {
            return this.correctAlpha(name)
          }
        },
        password: {
          required,
          minLength: minLength(8)
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
      !this.$v.form.password.required && errors.push('Mevcut şifrenizi girin!')
      !this.$v.form.password.minLength && errors.push(this.$t('validations.minCharacter', { n: 8 }))
      return errors
    }

  }
}

export default validations

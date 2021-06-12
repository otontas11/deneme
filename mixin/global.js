export const globalValidations = {
  methods: {

    correctAlpha(value) {
      return !!value ? /[a-zA-Z]/.test(value) && !this.isNumeric(value) : true
    },

    isAlpha(value) {
      return /[a-zA-Z]/.test(value)
    },

    isNumeric(value) {
      return /[0-9]/.test(value)
    }
  },
}

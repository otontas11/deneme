export const togglePassword = {

  data() {
    return {
      passwordCheckType: 'password',
      passwordType: 'password'
    }
  },

  methods: {

    changeType(field) {
      this[`${field}Type`] = this.typePassword(field) ? 'text' : 'password'
    },

    typePassword(field) {
      return this[`${field}Type`] === 'password'
    }

  }

}

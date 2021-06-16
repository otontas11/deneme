export const state = () => ({
  userLogged: false,
})

export const mutations = {

  isUserLogged(state, val) {
    state.userLogged = val
  }

}


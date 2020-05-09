export const state = () => ({
  admin_user: null
})

export const mutations = {
  setAdminUser (state, admin_user) {
    state.admin_user = admin_user
  }
}

export const actions = {
  async login ({ commit }, { email, password }) {
    const response = await this.$axios.$post('/api/login', { email, password })
      .catch(err => err.response)
    commit('setAdminUser', response)
  }
}

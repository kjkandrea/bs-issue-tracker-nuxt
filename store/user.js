const Cookie = process.client ? require('js-cookie') : undefined

export const state = () => ({
  auth: null,
  nickname: null
});

export const mutations = {
  setAuth (state, auth) {
    state.auth = auth
  },
  setNickname (state, string) {
    state.nickname = string
  }
}

export const actions = {
  async logIn({ commit }, payload) {
    try {
      let res = await this.$axios.post('/jwt-auth/v1/token', {
        username: payload.username,
        password: payload.password,
      });
      Cookie.set('auth', res.data.token)
      Cookie.set('nickname', res.data.user_display_name)
      commit('setAuth', res.data.token);
      commit('setNickname', res.data.user_display_name)
    } catch(err) {
      alert('로그인 실패')
      console.error(err);
    }
  },
  async logOut({ commit }, payload) {
    Cookie.remove('auth')
    commit('setAuth', null)
    commit('setNickname', null)
  }
}
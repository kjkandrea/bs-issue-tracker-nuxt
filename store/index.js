const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => ({});

export const mutations = {};

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    let auth = null
    let nickname = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        auth = parsed.auth
        nickname = parsed.nickname
      } catch (err) {
        console.log(err)
      }
    }
    commit('user/setAuth', auth)
    commit('user/setNickname', nickname)

  }
};

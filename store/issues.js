export const state = () => ({
  viewMilestone: 'all',
  issue: {
    title: {
      rendered: ''
    },
    content: {
      rendered: ''
    }
  },
  issues: [{
    title: {
      rendered: ''
    }
  }],
  milestones: []
})

export const mutations = {
  setStateViewMilestone (state, payload) {
    state.viewMilestone = payload;
  },
  setStateIssue (state, payload) {
    state.issue = payload
  },
  setStateIssues (state, payload) {
    state.issues = payload
  },
  setStateMilestones (state, payload) {
    state.milestones = payload
  },
}

export const actions = {
  async requestIssue({ commit }, payload) {
    try {
      let res = await this.$axios.get(`/v2/issue/${payload}`);
      commit('setStateIssue', res.data);
    } catch(err) {
        console.log(err)
    }
  },
  async requestIssues({ commit }, payload) {
    try {
      let res = await this.$axios.get(`/v2/issue${payload}`);
      commit('setStateIssues', res.data);
    } catch(err) {
        console.log(err)
    }
  },
  async requestMilestones({ commit }) {
    try {
      let res = await this.$axios.get(`/v2/milestones`);
      commit('setStateMilestones', res.data);
    } catch(err) {
        console.log(err)
    }
  },
  async createIssue({ commit, state }, payload) {
    try {
      let res = await this.$axios.post('/v2/issue', { 
        title: payload.title,
        content: payload.content,
        status: 'publish'
      }, {
        headers: { 'Authorization': 'Basic YW5kcmVhOlF4RmIgN3V3biAzRHlYIHZkSVAgRDFOeSA2OTRC' }
      })
    } catch(err) {
      console.log(err)
    }
  },
  async updateIssue({ commit, state }, payload) {
    // 서버에 게시글 수정 요청 보냄
    try {
      // let res = await this.$axios.patch('/patch', {
      //   title: payload.title,
      //   content: payload.content,
      // })
      alert('Patch 요청 : 콘솔창에서 data를 확인하세요')
      console.log(payload)
    } catch(err) {
      console.log(err)
    }
  },
  async deleteIssue({ commit, state }, payload) {
    // 서버에 게시글 삭제 요청 보냄
    try {
      //let res = await this.$axios.delete('/delete', payload)
      alert('Delete 요청 : 콘솔창에서 data를 확인하세요')
      console.log(payload)
    } catch(err) {
      console.log(err)
    }
  }
}
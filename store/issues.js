const TEST_KEY = 'Basic YW5kcmVhOlF4RmIgN3V3biAzRHlYIHZkSVAgRDFOeSA2OTRC';

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
        milestones: 7,
        status: 'publish'
      }, {
        headers: { 'Authorization': TEST_KEY }
      });
      console.log(res)
      this.$router.push({name: 'issue-id',  params: { id: res.data.id }})
    } catch(err) {
      console.log(err)
    }
  },
  async updateIssue({ commit, state }, payload) {
    console.log(payload.id);
    try {
      let res = await this.$axios.put(`/v2/issue/${payload.id}`, {
        title: payload.title,
        content: payload.content,
      }, {
        headers: { 'Authorization': TEST_KEY }
      })
      this.$router.push({name: 'issue-id',  params: { id: res.data.id }})
    } catch(err) {
      console.log(err)
    }
  },
  async deleteIssue({ commit, state }, payload) {
    try {
      let res = await this.$axios.delete(`/v2/issue/${payload}`, {
        headers: { 'Authorization': TEST_KEY }
      });
      this.$router.push('/')
    } catch(err) {
      console.log(err)
    }
  }
}
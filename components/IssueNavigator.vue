<template>
  <aside>
    <div>
      <button @click="onClickTab('all')">
        view all
      </button>
    </div>
    <div v-for="tab in milestones" :key="tab.id">
      <button @click="onClickTab(tab.name)">
        {{tab.name}}
      </button>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'IssueNavigator',
  computed: {
    milestones() {
      return this.$store.state.issues.milestones;
    },
  },
  methods: {
    onClickTab(v){
      this.$store.commit('issues/setStateViewMilestone', v)
    }
  },
  created() {
    this.$store.dispatch('issues/requestMilestones')
  }
}
</script>
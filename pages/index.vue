<template>
  <main>
    <template v-if="issues">
      <issue-list :issues="issues" />
    </template>
    <nuxt-link to="create">신규 이슈 생성</nuxt-link>
  </main>
</template>

<script>
import IssueList from '~/components/IssueList'

export default {
  components: {
    IssueList
  },
  computed: {
    issues() {
      return this.$store.state.issues.issues;
    },
  }, 
  middleware( { store } ) {
    return store.dispatch('issues/requestIssues', '?_embed=wp:term')
  }
}
</script>

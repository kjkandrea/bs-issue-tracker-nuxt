<template>
  <main>
    <issue-form :update=true />
  </main>
</template>

<script>
import IssueForm from '~/components/IssueForm'

export default {
  components: {
    IssueForm
  },
  name: 'IssueUpdate',
  middleware({ store, params }) {
    return store.dispatch('issues/requestIssue', params.id+'?_embed')
  },
}
</script>
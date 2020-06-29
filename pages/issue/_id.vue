<template>
  <div>
    <article>
      <h1>{{issue.title.rendered}}</h1>
      <dl>
        <dt>생성일</dt>
        <dd>{{issue.date}}</dd>
        <dt>수정일</dt>
        <dd>{{issue.modified}}</dd>
        <dt>상태</dt>
        <dd>{{issue._embedded['wp:term'][0][0].name}}</dd>
      </dl>
      <div v-html="issue.content.rendered">
      </div>
    </article>
    <nuxt-link :to="{ name: 'update-id',  params: { id: issue.id }}">수정</nuxt-link>
    <button @click="onClickDelete()">삭제</button>
  </div>
</template>

<script>

export default {
  name: 'IssueSingle',
  computed: {
    issue() {
      return this.$store.state.issues.issue
    }
  },
  methods: {
    onClickDelete() {
      return this.$store.dispatch('issues/deleteIssue', this.$route.params.id)
    }
  },
  middleware({ store, params }) {
    return store.dispatch('issues/requestIssue', params.id+'?_embed')
  },
}
</script>
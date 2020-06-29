<template>
  <div>
    <issue-navigator />
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Created Date</th>
          <th>Modified Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="issue in issues" :key="issue.id" >
          <template v-if="viewCategory(issue._embedded['wp:term'][0][0].name)">
            <td>
              {{issue.id}}
            </td>
            <td>
              <nuxt-link :to="{ name: 'issue-id',  params: { id: issue.id } }">
                {{issue.title.rendered}}
              </nuxt-link>
            </td>
            <td>
              {{issue.date}}
            </td>
            <td>
              {{issue.modified}}
            </td>
            <td>
              <span>
                {{issue._embedded['wp:term'][0][0].name}}
              </span>
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import IssueNavigator from '~/components/IssueNavigator'

export default {
  name: 'IssueList',
  components: {
    IssueNavigator
  },
  props: {
    issues: Array
  },
  computed: {
    view() {
      return this.$store.state.issues.viewCategory;
    },
  },
  data() {
    return {
      tabs: ['open', 'close'],
      selectedTab: null
    }
  },
  methods: {
    viewCategory(v) {
      if(this.view === 'all'){
        return true
      }else if(this.view === v){
        return true
      }
    }
  }
}
</script>
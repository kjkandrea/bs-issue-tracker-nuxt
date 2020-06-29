<template>
  <aside>
    <div>
      <button @click="onClickTab('all')">
        view all
      </button>
    </div>
    <div v-for="tab in categories" :key="tab.id">
      <template v-if="tab.slug === 'uncategorized' ? false : true">
        <button @click="onClickTab(tab.name)">
          {{tab.name}}
        </button>
      </template>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'IssueNavigator',
  computed: {
    categories() {
      return this.$store.state.issues.categories;
    },
  },
  methods: {
    onClickTab(v){
      this.$store.commit('issues/setStateViewCategory', v)
    }
  },
  created() {
    this.$store.dispatch('issues/requestCategories')
  }
}
</script>
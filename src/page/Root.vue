<template>
  <div>
    <list-view
            :memos="sharedState.memos"
            :count="privateState.count"
            :sort="privateState.sort"
            @remove="remove"
    ></list-view>
  </div>
</template>

<script lang="babel">
  import ListView from '../components/ListView'

  export default {
    data() {
      return {
        privateState: {
          count: 3,
          sort: 'latest'
        }
      }
    },
    computed: {
      sharedState() {
        return this.$store.state
      }
    },
    methods: {
      remove(id) {
        this.$store.commit('removeMemo', id)
      }
    },
    components: {
      ListView
    }
  }
</script>

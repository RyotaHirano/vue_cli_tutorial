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
  import {state} from '../store';
  import {actions} from '../actions';

  export default {
    data() {
      return {
        sharedState: state,
        privateState: {
          count: 3,
          sort: 'latest'
        }
      }
    },
    methods: {
      remove(id) {
        actions.deleteMemo(id)
      }
    },
    components: {
      ListView
    }
  }
</script>
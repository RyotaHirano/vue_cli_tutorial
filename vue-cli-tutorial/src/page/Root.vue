<template>
  <div>
    <list-view :memos="memos" :count="count" :sort="sort" @remove="remove"></list-view>
  </div>
</template>

<script lang="babel">
  import ListView from '../components/ListView'
  export default {
    data() {
      return {
        count: 3,
        sort: 'latest'
      }
    },
    props: {
      memos: Array
    },
    methods: {
      remove(id) {
        this.$emit('remove', id)
      }
    },
    components: {
      ListView
    }
  }
</script>
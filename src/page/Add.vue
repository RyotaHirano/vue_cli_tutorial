<template>
  <div>
    <editor-view @add="add"></editor-view>
  </div>
</template>

<script lang="babel">
  import EditorView from '../components/EditorView'

  export default {
    methods: {
      add(data) {
        this.$emit('add', data)
        this.$router.push({name: 'items'}) // 追加のあとに「一覧」にナビゲーションする
      }
    },
    components: {
      EditorView
    }
  }
</script>
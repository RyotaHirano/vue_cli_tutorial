<template>
  <div>
    <editor-view @add="add"></editor-view>
  </div>
</template>

<script lang="babel">
  import EditorView from '../components/EditorView'
  import {state} from '../store'
  import {actions} from '../actions'

  export default {
    methods: {
      add(data) {
        actions.addMemo(data)
        this.$router.push({name: 'items'}) // 追加のあとに「一覧」にナビゲーションする
      }
    },
    components: {
      EditorView
    }
  }
</script>
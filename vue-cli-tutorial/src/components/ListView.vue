<template>
  <div class="list-view">
    <div v-if="hasMemo">
      <list-item v-for="memo in filteredMemos" :memo="memo" @remove="remove"></list-item>
    </div>
    <div v-else>
      メモがありません。
    </div>
  </div>
</template>

<script lang="babel">
  import ListItem from './ListItem'

  export default{
    props: {
      memos: Array,
      sort: String,
      count: Number
    },
    computed: {
      hasMemo() {
        return this.filteredMemos && this.filteredMemos.length !== 0
      },
      filteredMemos() {
        let memos = this.memos.concat() // 新たな配列をconcatで生成

        // ソート順
        if(this.sort) {
          switch (this.sort) {
            case 'latest':
              memos.reverse()
          }
        }

        // 表示件数
        if(this.count) {
          memos = memos.splice(0, this.count)
        }

        return memos
      }
    },
    methods: {
      remove(id) {
        this.$emit('remove', id)
      }
    },
    components: {
      'list-item': ListItem
    }
  }
</script>
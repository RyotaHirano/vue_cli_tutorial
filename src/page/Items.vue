<template>
  <div class="layout-items">
    <list-view class="layout-items-left"
               :memos="memos"
               @remove="remove"
               @select="select"
    ></list-view>
    <router-view
            class="layout-items-right"
            :memo="selectedMemo"
            @add="update"
    ></router-view>
  </div>
</template>

<script lang="babel">
  import ListView from '../components/ListView';

  export default{
    props: {
      memos: Array
    },
    computed: {
      selectedMemo() {
        if(this.$route.params.id !== undefined) {
          const id = parseInt(this.$route.params.id, 10)
          const selectMemo = this.memos.find((memo) => {
            return memo.id === id
          })
          return selectMemo;
        }
      }
    },
    methods: {
      remove(id) {
        this.$emit('remove', id)
      },
      select(id) {
        this.$router.push(
          {
            name: 'edit',
            params: {id}
          }
        )
      },
      update(data) {
        this.$emit('update', data)
        this.$router.push({name: 'items'})
      }
    },
    components: {
      ListView
    }
  }
</script>

<style lang="scss">
  .layout-items {
    display: flex;
    &-left {
      flex-grow: 1;
      overflow: scroll;
    }
    &-right {
      border-left: 1px solid #bbb;
    }
  }
</style>

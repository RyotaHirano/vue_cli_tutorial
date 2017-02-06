<template>
  <div class="layout-items">
    <list-view class="layout-items-left"
               :memos="sharedState.memos"
               @remove="remove"
               @select="select"
    ></list-view>
    <router-view
            class="layout-items-right"
            :memo="selectedMemo"
            @add="update"
            @cancel="back"
    ></router-view>
  </div>
</template>

<script lang="babel">
  import ListView from '../components/ListView';

  export default{
    computed: {
      sharedState() {
        return this.$store.state
      },
      selectedMemo() {
        const id = parseInt(this.$route.params.id, 10)
        if(id !== undefined) {
          const memo = this.sharedState.memos.find((memo) => {
            return memo.id === parseInt(id, 10)
          })
          return memo
        }
      }
    },
    methods: {
      remove(id) {
        this.$store.commit('deleteMemo', id)
        this.$router.push({name: 'items'})
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
        this.$store.commit('updateMemo', data)
        this.$router.push({name: 'items'})
      },
      back() {
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

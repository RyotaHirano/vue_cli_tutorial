import {util} from './util'

export const mutations = {
  addMemo(state, newMemo) {
    newMemo.id = state.memos.reduce((id, memo) => {
      return id < memo.id ? memo.id : id
    }, 0) + 1
    state.memos.push(newMemo)
  },
  deleteMemo(state, id) {
    const targetId = parseInt(id, 10)
    const index = util.findIndex(state.memos, targetId)
    state.memos.splice(index, 1)
  },
  updateMemo(state, memo) {
    const targetId = parseInt(memo.id, 10)
    const index = util.findIndex(state.memos, targetId)
    state.memos.splice(index, 1, memo)
  }
}

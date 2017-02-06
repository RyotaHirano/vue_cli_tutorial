import {debug, state} from './store'
import {util} from './util'

export const actions  = {
  addMemo(newMemo) {
    debug && console.log(`addMemo triggered with`, newMemo)
    newMemo.id = state.memos.reduce((id, memo) => {
      return id < memo.id ? memo.id : id
    }, 0) + 1
    state.memos.push(newMemo)
  },
  deleteMemo(id) {
    debug && console.log(`removeMemo triggered with`, id)
    const targetId = parseInt(id, 10)
    const index = util.findIndex(state.memos, targetId)
    state.memos.splice(index, 1)
  },
  updateMemo(memo) {
    debug && console.log(`updateMemo triggered with`, memo)
    const targetId = parseInt(memo.id, 10)
    const index = util.findIndex(state.memos, targetId)
    state.memos.splice(index, 1, memo)
  }
}

export const util = {
  findIndex(memos, id) {
    const targetId = parseInt(id, 10)
    return memos.findIndex((memo) => {
      return memo.id === targetId
    })
  }
}
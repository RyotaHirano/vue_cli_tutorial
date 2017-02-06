import {mutations} from './mutations';

const state = {
  memos: [
    {
      id: 1,
      text: 'テスト',
      date: '16-10-28',
      tags: ['タグ1', 'タグ2']
    },
    {
      id: 2,
      text: 'テスト2',
      date: '16-11-28',
      tags: ['タグ2', 'タグ3']
    }
  ]
}

export default {
  state,
  mutations
}

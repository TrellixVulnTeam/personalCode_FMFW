import * as types from './../mutations-types'
import { getProlist } from './../../api/pro'
export default {
  namespaced: true,
  state: {
    prolist: []
  },
  actions: {
    // context action自带参数，
    // payload 方便调用action时传递参数
    async getProlistData (context, payload) {
      const res = await getProlist()
      console.log('0000', context)
      console.log('11111', context.state)
      console.log('2222', context.rootState)
      // context.commit('changeA', null, { root: true }) // 写三个参数
      context.commit({ type: 'changeA' }, { root: true }) // 写两个参数也可以
      context.commit(types.CHANGE_PRO_LIST, res.data)
    }
  },
  mutations: {
    [types.CHANGE_PRO_LIST] (state, payload) {
      state.prolist = payload
    }
  }
}

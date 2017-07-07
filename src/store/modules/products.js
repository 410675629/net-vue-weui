import shop from '../../api/shop.js'
import * as types from '../mutation-types'

// initial state
const state = {
  all: [],
  tableData: [{
      id:1,
      date: '2016-05-02',
      name: '王小虎',
      title:'报告，云音乐又来招人了！',
      desc:'去校园搞事情，'
     
    }, {
      id:2,
      date: '2016-05-04',
      name: '王小虎',
      title:'报告，云音乐又来招人了！',
      desc:'去校园搞事情，'
    }]

}

// getters
const getters = {
  allProducts: state => state.all
}

// actions
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit(types.RECEIVE_PRODUCTS, { products })
    })
  },
  deleteItem({commit}){
    commit(types.DELETEITEM)
  }

}

// mutations
const mutations = {
  [types.DELETEITEM](state){
    debugger;
    state.tableData.splice(0,1);
  },
  [types.RECEIVE_PRODUCTS] (state, { products }) {
    state.all = products
  },

  [types.ADD_TO_CART] (state, { id }) {
    state.all.find(p => p.id === id).inventory--
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

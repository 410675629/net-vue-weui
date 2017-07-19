import shop from '../../api/shop.js'
import * as types from '../mutation-types'

// initial state
const state = {

  newState:'这是一个新状态',
  message:'',
  count:1000,
  checkoutStatus: null,
  todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
}

// getters store 中的 state 中派生出一些状态
const getters = {
  checkoutStatus: state => state.checkoutStatus,
  doneTodosCount: state => {
      return state.todos.filter(todo => todo.done)
  },
  message: state => state.message
}

// actions  是处理异步的mutations
const actions = {
  // [1.1]最简单的 action 异步处理mutations
  // Action 可以包含任意异步操作
 ADDCOUNT(context) {
    //调用 context.commit 提交一个 mutation，
    //或者通过 context.state 和 context.getters 
    //来获取 state 和 getters
    setTimeout(() => {
      context.commit('MESSAGE')
    }, 1000)
  },

  INCREMENT (context) {
    setTimeout(()=>{
      context.commit('INCREMENT',{count:1})
    },1000)
  },

  async ACTIONB ({ commit }) {
    debugger;
    commit('gotData')
  },

  // 使用异步编程
  actionA ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        debugger;
        commit('MESSAGE',{count:8888})
        resolve()
      }, 1000)
    })
  },



  // [1.2]最简单的 action 异步处理mutations
  /*message ({commit}) {
    setTimeout(() => {
      commit('MESSAGE')
    }, 1000)
  },*/
  checkout ({ commit, state }, products) {
    debugger;
    const savedCartItems = [...state.added]
    commit(types.CHECKOUT_REQUEST)
    shop.buyProducts(
      products,
      () => commit(types.CHECKOUT_SUCCESS),
      () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
    )
  }
}

// mutations
const mutations = {
  // 1、 打印页面消息
  [types.MESSAGE] (state,mes){
    state.message = state.message + mes.count;
  },

  //增加
  [types.INCREMENT] (state,payload){
    debugger;
    state.count = state.count + payload.count
  },

  [types.ADD_TO_CART] (state, { id }) {
    state.lastCheckout = null
    const record = state.added.find(p => p.id === id)
    if (!record) {
      state.added.push({
        id,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },

  [types.CHECKOUT_REQUEST] (state) {
    // clear cart
    state.added = []
    state.checkoutStatus = null
  },


  [types.CHECKOUT_SUCCESS] (state) {
    state.checkoutStatus = 'successful'
  },

  [types.CHECKOUT_FAILURE] (state, { savedCartItems }) {
    // rollback to the cart saved before sending the request
    state.added = savedCartItems
    state.checkoutStatus = 'failed'
  },

  [types.gotData] (state){

    debugger;
    alert('gotData')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

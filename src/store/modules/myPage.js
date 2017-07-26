/**
 * Created by hzgaoquankang on 2017/7/23.
 * mailPage的状态管理
 */
import * as types from '../mutation-types'


import {
  _fetch,
  fetch2
} from '../../lib/request.js';

const URL = {
  enterPersonalCenter: '/api/campus/personal/center', //2. 个人中心首页
  getMailList: '/api/campus/personal/mailList', //3 个人中心--站内信列表
  getMailDetail: '/api/campus/personal/mailList/detail' //4 个人中心--站内信列表--详情
}


// initial state
const state = {
  applyRecord: {},
  mailNoReadNum: 0,
  mailList: [],
  noPass: 0, //没有通过
  timeout: 3000, //请求超时时间
  mailDetail: '',
  mailTitle: '',
  /**
   * 应聘状态的步骤
   */
  process: [{
    'num': '1',
    'state': [1, 2],
    'title': '简历筛选/测评'
  }, {
    'num': '2',
    'state': [3, 4, 5, 6, 7],
    'title': '笔试'
  }, {
    'num': '3',
    'state': [8, 9, 10, 11, 12, 13],
    'title': '面试'
  }, {
    'num': '4',
    'state': [14],
    'title': 'offer'
  }, {
    'num': '5',
    'state': [15],
    'title': '入职'
  }]
};

// getters store 中的 state 中派生出一些状态
const getters = {

};

// actions  是处理异步的mutations
const actions = {
  // 1、获取用户信息
  async getPersonalInfo(context) {
    _fetch(fetch2(URL.enterPersonalCenter), state.timeout).then(response => response.json())
      .then(data => {
        context.commit('GETPERSONALINFO', {
          data: data.data
        })
      })
      .catch(e => console.log("Oops, error", e))
  },


  //2、获取站内信
  async getMailList(context) {
    _fetch(fetch2(URL.getMailList), state.timeout).then(response => response.json())
      .then(data => {
        context.commit('GETMAILLIST', {
          data: data.data.list
        })
      })
      .catch(e => console.log("Oops, error", e))
  },


  // 3 站内信详情
  async getMailDetail(context, id) {
    _fetch(fetch2(URL.getMailDetail, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        },
        queryParams: {
          id: id
        }
      }), state.timeout).then(response => response.json())
      .then(data => {
        context.commit('GETMAILDETAIL', {
          data: data.data
        })
      })
      .catch(e => console.log("Oops, error", e))
  }
};

// mutations
const mutations = {

  // 1、获取用户信息
  [types.GETMAILLIST](state, res) {
    state.mailList = res.data;
  },

  //2、获取站内信
  [types.GETPERSONALINFO](state, res) {
    state.mailNoReadNum = res.data.newMailRemind;
    state.applyRecord = res.data.applyRecord;
  },

  // 3 站内信详情
  [types.GETMAILDETAIL](state, res) {
    state.mailDetail = res.data.content;
    state.mailTitle = res.data.title;
  },
};


export default {
  state,
  getters,
  actions,
  mutations
}
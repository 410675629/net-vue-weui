/**
 * Created by hzgaoquankang on 2017/7/23.
 * mailPage的状态管理
 */
import * as types from '../mutation-types'

const URL={
    getCampusNews: '/api/campus/index/campusNewsList'
};

// initial state
const state = {
    bannercampusList:[],
    campusList:[]
};

// getters store 中的 state 中派生出一些状态
const getters = {

};

// actions  是处理异步的mutations
const actions = {

    /**
     * 获得campusNewsList新闻列表
     * @param context
     * @returns {Promise.<void>}
     */
    async getCampusNews (context) {
        fetch(URL.getCampusNews).then(response => response.json())
            .then(data => {context.commit('GETCAMPUSNEWS',{data:data.data})})
            .catch(e => console.log("Oops, error", e))
    }
};

// mutations
const mutations = {
    [types.GETCAMPUSNEWS] (state,res){
        let arr = res.data,
            bannercampusList=[],
            campusList=[];

        /**
         * 根据‘flag’区分 bannercampusList 和 campusList
         * @type {*}
         */
         arr.forEach((value) => {
                value.flag=="0"?bannercampusList.push(value):campusList.push(value);
         })
         state.campusList = campusList;
         state.bannercampusList = bannercampusList;
    }
};


export default {
    state,
    getters,
    actions,
    mutations
}

import * as types from '../mutation-types';

const state ={
    showContent:[
        {subtitle:"北京",subCon:"首都……"},
        {subtitle:"上海",subCon:"金融……"},
        {subtitle:"广州",subCon:"吃货……"},
        {subtitle:"深圳",subCon:"小渔村……"}
    ],
    activeIndex:0,
};
const mutations = {
    [types.CHANGEACTIVE](state,index){
        console.log('log');
        console.log(state.activeIndex);
        state.activeIndex = index;
    },
    [types.CHANGECON](state,obj){
        state.showContent[obj.index].subCon = obj.con;
    }
}

export default {
    state,
    mutations
}
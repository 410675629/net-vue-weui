import * as types from './mutation-types'

//Action 提交的是 mutation，而不是直接变更状态
//Action 可以包含任意异步操作
export const addToCart = ({ commit }, product) => {
  if (product.inventory > 0) {
    commit(types.ADD_TO_CART, {
      id: product.id
    })
  }
}

export const changeActive = ({commit,state},index)=>{
    console.log(1);
    commit(types.CHANGEACTIVE,index)
};

export const changeCon = ({commit,state},index,content)=>{
    commit(types.CHANGECON,{
        index:index,
        content:content,
    })
};

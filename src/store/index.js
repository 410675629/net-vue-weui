import * as actions from './actions'
import * as getters from './getters'
import cart from './modules/cart'
import products from './modules/products'


export default {
  actions,
  getters,
  modules: {
    cart,
    products
  }
}

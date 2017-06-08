import * as actions from './actions'
import * as getters from './getters'
import cart from './modules/cart'
import products from './modules/products'
import tab from './modules/tab'
import plugins from './plugins';

export default {
  plugins:[plugins],
  actions,
  getters,
  modules: {
    cart,
    products,
    tab
  }
}

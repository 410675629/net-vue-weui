import plugins from './plugins'
import myPage from './modules/myPage'
import homePage from './modules/homePage'
import getters from './getters'
import actions from './actions'
export default {
    plugins:[plugins],
    actions,
    getters,
    modules: {
        myPage,
        homePage
    }
}

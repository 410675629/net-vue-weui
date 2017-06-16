

<template>
  <div>

    <div class="page-tabbar">
      <div class="page-wrap">
        <div class="page-title">Tabbar</div>
        <div>
          <mt-cell class="page-part" title="当前选中" :value="selected" />
        </div>

        <mt-tab-container class="page-tabbar-container" v-model="selected" swipeable>
          <mt-tab-container-item id="tab-container1">
            <mt-index/>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container2">
            <mt-cell v-for="n in 5" :title="'订单 ' + n" />
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container3">
            <mt-cell v-for="n in 7" :title="'发现 ' + n" />
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container4">
            <div class="page-part">
              <mt-cell v-for="n in 12" :title="'我的 ' + n" />
            </div>
            <router-link to="/">
              <mt-button type="danger" size="large">退出</mt-button>
            </router-link>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>

      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="tab-container1">
          <img slot="icon" src="http://cdn.static.tupu360.com/static/AliWeixin/images/indexLogo.png" width="20px" height="20px">外卖</mt-tab-item>
        <mt-tab-item id="tab-container2">
          <img slot="icon" src="http://cdn.static.tupu360.com/static/AliWeixin/images/indexLogo.png" width="20px" height="20px">订单</mt-tab-item>
        <mt-tab-item id="tab-container3">
          <img slot="icon" src="http://cdn.static.tupu360.com/static/AliWeixin/images/indexLogo.png" width="20px" height="20px">发现</mt-tab-item>
        <mt-tab-item id="tab-container4">
          <img slot="icon" src="http://cdn.static.tupu360.com/static/AliWeixin/images/indexLogo.png" width="20px" height="20px">我的</mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>

  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
  import { Tabbar, TabItem ,TabContainer, TabContainerItem,Cell} from 'mint-ui';
  import Index from '../home/index.vue';;
  export default {
    data () {
      return {
         selected: 'tab-container1',
         active: 'tab-container1'

      }
    },

    methods: {
      
    },

    mounted () {
      
    },

    components: {
      'mt-tabbar':Tabbar,
      'mt-tab-item':TabItem,
      'mt-tab-container-item':TabContainerItem,
      'mt-cell':Cell,
      'mt-tab-container':TabContainer,
      'mt-index':Index,
    },

    computed:{
      ...mapGetters({
        doneTodo:'doneTodosCount',
        message:'message',
        getShowCon:'getShowCon'
      }),

      ...mapState({
          count: state => state.cart.count+2,
          activeIndex: state => state.tab.activeIndex+1
      }),
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
  
  .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }
  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }

</style>
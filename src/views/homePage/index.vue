

<template>
  <div>
    <div class="page-tabbar">
      <div class="page-wrap">
        <mt-tab-container class="page-tabbar-container" v-model="selected">
          <mt-tab-container-item id="tab-container1">
            <mt-index/>
          </mt-tab-container-item>
          
          <mt-tab-container-item id="tab-container4">
            <mt-myPage/>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>

      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="tab-container1">
          <i class="iconfont icon-shouye"></i>
          <p>首页</p>
        </mt-tab-item>
        
        <mt-tab-item id="tab-container4">
          <i class="iconfont icon-wode"></i>
          <p>我的</p>
          </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>

  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
  import { Tabbar, TabItem ,TabContainer, TabContainerItem,Cell} from 'mint-ui';
  import Index from '../home/index.vue';
  import Mypage from '../myPage/index.vue';
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
      'mt-myPage':Mypage
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
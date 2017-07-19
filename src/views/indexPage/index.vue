
<template>
  <div>
    <div class="page-tabbar">
      <router-view/>
      
      <div class="mint-tabbar is-fixed">
        <router-link v-for="item in tagNames" :to="item.tabLink" class ='mint-tab-item'>
          <div class="mint-tab-item-icon"></div>
          <div class="mint-tab-item-label"> <i class ='iconfont' :class="item.icon"></i>
            <p>{{item.name}}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
  export default {
    data () {
      return {
        tagNames:[
            {name:'首页',tabLink:'/index/homePage',strName:'homePage',icon:'icon-shouye'},
            {name:'我的',tabLink:'/index/myPage',strName:'settingPage',icon:'icon-wode'}
        ]
      }
    },

    methods: {
      
    },

    mounted () {
      
      console.log(this.selected)
    },

    components: {
      
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

  .router-link-active{
    background-color: #eaeaea;
    color:red;
  }



</style>

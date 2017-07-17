
<template>
  <div class="m-campusNews">
    <header>
      <div class="f-fl f-tal"> <i class="iconfont icon-dongtai"></i>
        <span>{{myTitle}}</span>
      </div>

      <div class="f-fr f-tar f-more">
        <router-link :to='moreUrl'>
          <span>查看更多</span> <i class="iconfont icon-gengduo"></i>
        </router-link>
      </div>
    </header>
    <ul>
      <li v-for="item in tableData">
        <mt-campusItems my-title ='标题' :item =item />
      </li>
    </ul>
    <mt-more/>

  </div>
</template>

<script>

  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
  import CampusItem from '../../components/home/campusNewsUI/campusItem/index.vue';
  import More from '../../components/more.vue';

  
  export default {
    props: ['myTitle'],
    
    data () {
      return {
          tableData:[],
          moreUrl:'https://mp.weixin.qq.com/mp/homepage?__biz=MzAxNDIzMDQwNg==&hid=1&sn=61e1ee5184ea24eaa12718209ccdcaed'
      }
    },

    methods:{
      async getCampusNews () {
        let self  =this;
        fetch('/api/getCampusNews').then(response => response.json())
          .then(data=>this.tableData =data.data)
          .catch(e => console.log("Oops, error", e))
      },

      //删除校招动态
      __evDelete(){
        debugger;
        //this.$store.dispatch('deleteItem');  
        this.deleteItem(); //使用mapActions形式
      },

      __evAddToCart(){
        debugger;
        this.addToCart();
      }
    },
    components: {
      'mt-campusItems':CampusItem,
      'mt-more':More
    },

    computed:{

      ...mapState({
         // tableData:state=>state.products.tableData
      }),
      ...mapActions([
        'deleteItem',
        'addToCart'
      ])
    },  

    mounted () {
      this.getCampusNews();
    },

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
      .m-campusNews{
        
        header{
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            box-sizing: border-box;
            color: #000 ;
            background: #eee;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            font-size: 14px;
            height: 40px;
            line-height: 1;
            padding: 0 10px;
            position: relative;
            text-align: center;
            white-space: nowrap;
            div{
              -webkit-box-flex: 1;
              -ms-flex: 1;
              flex: 1;
            }
        }

        ul li{
            border-bottom: 1px solid #efefef;
            height: auto;
          }
      }

</style>

<template>
  <div class="m-campusNews">
    <h1><i class="iconfont icon-dongtai"></i><span>{{myTitle}}</span></h1>

    <ul @click="__evDelete">
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
          
      }
    },

    methods:{
      
      //删除校招动态
      __evDelete(){
        //this.$store.dispatch('deleteItem');
        this.deleteItem();
      },
    },

    components: {
      'mt-campusItems':CampusItem,
      'mt-more':More
    },
    computed:{

      ...mapState({
          tableData:state=>state.products.tableData
      }),
      ...mapActions([
        'deleteItem'
      ])
    }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
      .m-campusNews{

        h1{
          border: 1px solid #efefef;
          background: #eee;
          padding: 10px 10px;
          height:.6rem;
          line-height: .6rem;
          
          span{
              margin-left: .1rem;
          }
        }

        ul li{
            border-bottom: 1px solid #efefef;
            height: auto;
          }
      }

</style>
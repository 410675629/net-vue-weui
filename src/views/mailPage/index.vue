
<template>
  <div class="m-campusNews">
    <ul>
      <li v-for="item in tableData">
         <mt-campusItems my-title ='标题' :item =item />
      </li>
    </ul>
  </div>
</template>

<script>

  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
  import CampusItem from '../../components/home/campusNewsUI/campusItem/index.vue';
  
  export default {
    props: ['myTitle'],
    
    data () {
      return {
          tableData:[]
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
        this.addToCart();
      }
    },
    components: {
      'mt-campusItems':CampusItem
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
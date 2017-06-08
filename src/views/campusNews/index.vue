
<template>
	<div class="m-campusNews">
      <h1>{{myTitle}}</h1>
		  
      <ul @click="__evDelete">
         <li v-for="item in tableData">{{ item.address}} -- {{item.date}}</li>
      </ul>
	</div>
</template>

<script>

  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
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
          height:1rem;
          line-height: 1rem;
          border-left: .1rem solid #f00;
          border-bottom:1px dashed #ccc;
          border-top:1px dashed #ccc;
          padding-left:.5rem;
        }

        ul li{
            border-bottom: 1px solid #efefef;
            height: 1rem;
            line-height: 1rem;
          }
      }

</style>

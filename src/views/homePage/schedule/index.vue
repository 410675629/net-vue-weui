
<template>
  <div class="m-schedule">
      <h1>{{myTitle}}</h1>
      <ul>
        <li v-for="item in tableData">
            <router-link :to="{ name: 'schedule', params: { id: item.id }}">{{ item.address}} -- {{item.date}}</router-link>
        </li>
      </ul>
  </div>

  <!-- <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link> -->
  <!-- <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link> -->
</template>

<script>

  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
  export default {
    props: ['myTitle'],
    
    data () {
      return {
          id:1
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
      .m-schedule{
        h1{
          height:1rem;
          line-height: 1rem;
          border-left: .1rem solid #f00;
          border-top:1px dashed #ccc;
          border-bottom:1px dashed #ccc;
          padding-left:.5rem;
        }

        ul li{
            border-bottom: 1px solid #efefef;
            height: 1rem;
            line-height: 1rem;
          }
      }

</style>

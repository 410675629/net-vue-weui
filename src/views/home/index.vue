<template>
  <div>
      <p class="welcome">欢迎使用-{{message}}</p>
        
    <span @click="add">{{count}}</span>
    <div>
    <v-modal :show.sync="showCustomModal" effect="fade" width="400">
  <div slot="modal-header" class="modal-header">
    <h4 class="modal-title">
      <i>Custom</i> <code>Modal</code> <b>Title</b>
    </h4>
  </div>
  <div slot="modal-body" class="modal-body">...</div>
  <div slot="modal-footer" class="modal-footer">
    <button type="button" class="btn btn-default" @click="showCustomModal = false">Exit</button>
    <button type="button" class="btn btn-success" @click="showCustomModal = false">Custom Save</button>
  </div>
</v-modal>


    </div>
    
  </div>
</template>

<script>


  import {mapState,mapGetters,mapMutations} from 'vuex';
  import {affix,alert,modal} from 'vue-strap';
  /*import Copyright from '../../components/copyright';*/
  export default {
    data () {
    	return {
        'count':1,

         tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
      
      }
    },

    methods: {
      
      add () {
        //只能dispatch action
        this.$store.dispatch('message')
      },

      async getContent () {
        fetch('/api/login').then(response => response.json())
        .then(data =>console.log(data))
        .catch(e => console.log("Oops, error", e))
      }
    },

    mounted () {
      this.getContent();
      
      //提交mutations
      this.$store.commit({
        type:'MESSAGE',
        count:11
      });
    },

    components: {
      'v-modal':modal
    },

    computed:{
      ...mapGetters({
        doneTodo:'doneTodosCount',
        message:'message'
      }),

      /*...mapState({
        message:'message',
        count: state => state.count+1,
      })
      */
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
  h1 {
    color: #42b983;
  }

  .logo {
    width: 100px;
    height: 100px;
    a {
      color: #42b983;
      text-decoration: none;
    }
  }
</style>

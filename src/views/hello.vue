<template>
  <div class="hello">
    <Step :active='active' :space="space" direction="vertical"></Step>
    <c-title :text="title"></c-title>
    <img class="logo" src="../assets/images/logo.png">
    <p class="welcome">欢迎使用 --{{message}} --vue</p>
    <div v-html="content|time"></div>
    <input type="number" name="" value="" placeholder="" v-focus>
   <div>
     {{doneTodo[0]}}--{{count}}
   </div>
  </div>
</template>

<script>

  import {mapState,mapGetters  } from 'vuex';
  import Step from "components/step";

  export default {
    data () {
      return {
        value2:'',
        active:1,
        space:600,
        title: 'new',
        content: ''
      }
    },
    methods: {
      async getContent () {
        /*const response = await fetch('/api/login');
        this.content = await response.text();*/

      /*  await fetch('/api/login').then(response => response.json())
        .then(data => console.log(data))
        .catch(e => console.log("Oops, error", e))

      */
        try {
          let response = await fetch('/api/login');
          let data = await response.json();
        } catch(e) {
          console.log("Oops, error", e);
        }
      }
    },

    mounted () {

      this.getContent();
      this.$store.commit('MESSAGE', '欢迎使用 vue！');
      this.$store.commit('INCREMENT',10)
      /*this.$store.commit('ADD', {
        amount: 10
      })*/
      this.$store.commit({
        type:'ADD',
        amount: 10
      })
    },
    components: {
      Step:Step
    },

    /*computed :{
      doneTodosCount () {
        //直接用computed 方得到
        return this.$store.getters.doneTodosCount
      }
    }*/

    /*computed:{
      ...mapGetters(['doneTodosCount'])
    }*/

    computed:{
      ...mapGetters({
        doneTodo:'doneTodosCount'
      }),

      ...mapState({
        message:'message',
        count: state => state.count+1,
      })
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

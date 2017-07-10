<template>
    <div>
      <mt-swipe :auto="4000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
      <!-- 校招动态-->
      <mt-campusNews my-title ='校招动态'></mt-campusNews>
      
      <!-- 行程安排-->
      <!-- <mt-schedule my-title ='行程安排'> </mt-schedule> -->


     <!--  <p class="welcome">欢迎使用-{{message}} --{{activeIndex}}</p>      
      <p class="welcome" :id=this.$store.state.cart.newState>---{{this.$store.state.cart.newState}}---</p>   
     <span @click="increment">{{count}}</span> -->
   
    </div>
</template>

<script>

  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
  import {CellSwipe,Swipe,SwipeItem,Range} from 'mint-ui';
  
  import CampusNews from '../campusNews/index.vue'; // 校招动态
  import Schedule from '../schedule/index.vue';    //行程安排
  

  export default {
    data () {
    	return {
       /* stitle:'校招动态'*/
      }
    },

    methods: {
      
      //设置tittle
      setTittle(){
        document.title = '首页'
      },

      //只能dispatch action
      increment () {
        //this.$store.dispatch('INCREMENT');

       this.$store.dispatch({
          type:'INCREMENT',
          amount: 10
        })

      },


     clickTab(index){
          console.log(index);
          this.$store.commit('CHANGEACTIVE',index);
      },

      gotData(){
        var self = this;
        self.$store.dispatch('actionA').then(()=>{
          //self.getContent();
        })
      },

    },

    mounted () {

      //提交mutations 
      this.$store.commit({
        type:'MESSAGE',
        count:11
      });
    },


    components: {
      'mt-swipe-item':CellSwipe,
      'mt-swipe-item':SwipeItem,
      'mt-swipe':Swipe,
      'mt-range':Range,
      'mt-campusNews':CampusNews,
      'mt-schedule':Schedule
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
  h1 {
    color: #42b983;
  }

  .logo {
    width: 2rem;
    height: 2rem;
    a {
      color: #42b983;
      text-decoration: none;
    }
  }



  .mint-swipe {
      height: 4rem;
      color: #fff;
      font-size: 30px;
      text-align: center;
      margin-bottom: .4rem;
  }
  .mint-swipe-item {
      line-height: 4rem;
  }
  .slide1 {
      background-color: #0089dc;
      color: #fff;
  }
   .slide2 {
      background-color: #ffd705;
      color: #000;
  }
   .slide3 {
      background-color: #ff2d4b;
      color: #fff;
  }

  .is-active{
     background-color: #ff2d4b;
  }

  .btn-admin {
      margin: 10px;
      background-size: 37.5px auto;
      width: 50px;
      height: 50px;
  }

  .i-user {
      /* background-image: url(../images/iconsUser.png); */
  }

  .icons {
      display: inline-block;
     /*  background: url(../images/iconsCategory.png) 50% 50% no-repeat; */
      background-size: 25px auto;
      width: 25px;
      height: 25px;
      vertical-align: middle;
  }

  .index-logo {
    width: 75.8%;
    max-width: 569px;
    min-width: 275px;
    margin: 0 auto;
    padding: 50px 0;
    img {
      border: 0 none;
      vertical-align: top;
      width: 100%;
  }
}


  .abs-footer{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    img {
          border: 0 none;
          vertical-align: top;
          width: 100%;
    }
    .nav-box {
        text-align: center;
        margin: 0 .15rem;
    }
    .d-box {
        display: -webkit-box;
        display: -moz-box;
        display: box;
    }

    .navs {
        background: #ff7336;
        margin: .15rem .07rem .15rem;
        border-radius: 150px;
        color: #fff;
        padding: .25rem 0;
        font-size: 15px;
        -webkit-box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.2);
        box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.2);
    }

    .flex1 {
        -moz-box-flex: 1;
        -webkit-box-flex: 1;
        box-flex: 1;
        display: block;
    }
    .n-meet {
        background-color: #fcbb09;
    }

    .n-social {
        background-color: #10dba3;
    }
  }

</style>

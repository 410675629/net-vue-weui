
<template>
  <div class="m-campusNews">
    <header>
      <div class="f-fl f-tal">
        <span class="icon"></span>
        <span>{{myTitle}}</span>
      </div>

      <div class="f-fr f-tar f-more">
      <a :href ='moreUrl' >
        <span>查看更多</span>
        <span class="arrow">
          <i :class="{'arrow-right arrow-down':show,'arrow-right':!show}"></i>
        </span>
      </a>
      </div>
    </header>
    
    <ul>
      <li v-for="item in campusList">
        <mt-campusItems :item =item />
      </li>
    </ul>
  </div>
</template>

<script>

  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
  import CampusItem from '../../components/home/campusNewsUI/campusItem/index.vue';

  
  export default {
    props: ['campusList','myTitle'],
    
    data () {
      return {
          moreUrl:'https://mp.weixin.qq.com/mp/homepage?__biz=MzAxNDIzMDQwNg==&hid=1&sn=61e1ee5184ea24eaa12718209ccdcaed'
      }
    },
      computed:{
      },
      methods:{
      },
    components: {
      'mt-campusItems':CampusItem
    },
    created () {

    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
.m-campusNews{
  .arrow{
    display: inline-block;
    width: 0.3rem;
  }
  .arrow-right {
    border: solid 2px #c8c8cd;
    border-bottom-width: 0;
    border-left-width: 0;
    content: " ";
    top: 50%;
    right: 20px;
    position: absolute;
    width: 5px;
    height: 5px;
    -webkit-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(45deg);
    transition: transform .5s;
    -webkit-transition: -webkit-transform .5s;
  }
  header{
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      box-sizing: border-box;
      color: #000 ;
      background: #fff;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      font-size: 0.28rem;
      height: 0.9rem;
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
      .icon{
        display: inline-block;
        width: 0.06rem;
        height: 0.28rem;
        background: #df3834;
        vertical-align: middle;
      }
  }

  ul li{
      height: auto;
    }

}

</style>
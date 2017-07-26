<template>
  <div class="myPage">
    <div class="headImage">
            <img src="../../assets/images/4.png" />
    </div>
    <div @click="showState">
      <mt-cell title="应聘状态"  :label="applyRecord.applyPositionName">
        <span>{{applyRecord.applyStatusName}}</span>
        <span class="arrow"> <i :class="{'arrow-right arrow-down':show,'arrow-right':!show}"></i>
        </span> <i slot="icon" class="iconfont icon-dongtai"></i>
      </mt-cell>
    </div>

    <div :class="{'showState':show,'hideState':!show}">
      <ul>
        <li v-for="item in process">
          <mt-cell :title='item.title'>
            <i slot="icon" class="iconfont icon-tongguo i-success"  v-if="active > item.num"></i>
            <i slot="icon" class="iconfont icon-dengdaizhong i-pendding"  v-if="active == item.num&&active!=noPass"></i>
            <i slot="icon" class="iconfont icon-weitongguo i-error" v-if = "active == item.num&&active==noPass"></i>
            <span v-if ="active ==item.num">{{applyRecord.applyStatusName}}</span>
          </mt-cell>
        </li>
      </ul>
    </div>

    <mt-cell title="站内信" isLink to='/mailPage'>
      <i slot="icon" class="iconfont icon-mail"></i>
      <mt-badge type="error" size='small'>{{mailNoReadNum}}</mt-badge>
    </mt-cell>

    <mt-cell title="网易邮箱帐号" isLink>
      <i slot="icon" class="iconfont icon-wode"></i>
    </mt-cell>
  </div>
</template>

<script>

  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
  import {Header,Cell,Badge,Toast} from 'mint-ui';
  

  export default {
    data () {
        return {
          show:false,
          noPass:0,
          process: [{
              'num': '1',
              'state': [1, 2],
              'title': '简历筛选/测评'
          }, {
              'num': '2',
              'state': [3, 4, 5, 6, 7],
              'title': '笔试'
          }, {
              'num': '3',
              'state': [8, 9, 10, 11, 12, 13],
              'title': '面试'
          }, {
              'num': '4',
              'state': [14],
              'title': 'offer'
          }, {
              'num': '5',
              'state': [15],
              'title': '入职'
          }]
      }
    },


    computed:{
        ...mapState({
            mailNoReadNum: state => state.myPage.mailNoReadNum,
            applyRecord: state => state.myPage.applyRecord
        }),


        active(){
          for (var i = 0; i < this.process.length; i++) {
            var indexOfArr = this.process[i].state.indexOf(this.applyRecord.applyStatus);
            if(indexOfArr>-1){
              if(indexOfArr == this.process[i].state.length-1) 
                this.noPass = i+1;
              return i+1;
            }
          }
        }
    },

    methods: {
        setTittle(){
        document.title = '我的'
        },

        /**
         * 控制 面试 状态栏的展开与合闭
         */
        showState(){
            this.show=!this.show;
        },


          ...mapActions([
              'getPersonalInfo'
          ]),

        },
        

    mounted () {
      this.getPersonalInfo()
      this.setTittle();
      
    },


    components: {
      'mt-header':Header,
      'mt-cell':Cell,
      'mt-badge':Badge
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" >

.myPage{
    h1 {
    color: #42b983;
  }
  .headImage{
    width: 100%;
    height: 2.2rem;
    background: #eeeeee;
    text-align: center;
    img{
      width:1.2rem;
      height:1.2rem;
      border-radius:100%;
      margin-top: 0.5rem;
    }
  }
  .i-success{
    color: #7ED321;
  }

  .i-pendding{
    color:#F6A623;
  }
  .i-error{
    color:#F8513B;
  }

  .hideState{
      transition: all 0.5s ease;
      -webkit-transition: all 0.5s ease;
      display:none;
  }

  .showState{
      transition: all 0.5s ease;
      display:block;
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

  .mint-cell-allow-right{
      -webkit-transform: rotate(145deg);
      transform: rotate(145deg);
      transition: transform .5s;
      -webkit-transition: -webkit-transform .5s;
  }
}

</style>
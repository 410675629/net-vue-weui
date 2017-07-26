
<template>
  <div class="m-mailDetaiPage" @click ='__evMailReply'>
    <h1>{{title}}</h1>
    <section v-html ='content'></section>
    <mt-popup
      v-model="popupVisible"
      popup-transition="popup-fade"  class='mint-pop'>
      <mt-radio
      class="page-part"
      title="接受面试"
      v-model="value"
      align = "right"
      :options="options" />
      <mt-button type="danger" :disabled='!value'  size ='large'>确定</mt-button>
    </mt-popup>
  </div>
</template>

<script>

  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
  import {Popup,Radio,Button} from  'mint-ui';

  export default {

      data(){
        return {
          value: '',
          popupVisible:false,
          options:['选项A', '选项B', '选项C'],
        }
      },

      computed:{
          
          ...mapState({

             title:state => state.myPage.mailTitle,
            
             content :state => state.myPage.mailDetail,
          })
      },

      methods:{
        
        ...mapActions([
            'getMailDetail',
            'getQuestion'
        ]),


        __evMailReply(event){

            const tagName =  event.target.tagName.toLowerCase();
            if(tagName==='button'){
              
              this.popupVisible = true;
              // 操作站内信回复操作
            }
        }
      },

      created(){
          
          const mailID  = this.$route.params.id;
          
          if(mailID==null || mailID ==''){
            return;
          }

          //获取站内信详情
          this.getMailDetail(mailID);

      },

      components: {
      'mt-popup':Popup,
      'mt-radio':Radio,
      'mt-button':Button
    },

      mounted(){

          document.title = this.title;
      }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
  
    .m-mailDetaiPage{
      box-sizing: border-box;
      padding: 38px 27px;

      h1{
          font-size: .5rem;
          font-weight: 700;
          line-height: .5rem;
          
      }

      section {
          margin-top:.5rem;
          line-height: .64rem;
          h2{
            padding :0.16rem 0;
            line-height: .32rem;
            font-size:.32rem;
            color: #333;
          }

          h2.strong{
            border-left:4px solid red;
          }

          button {
            display: block;
            padding: 10px 30px;
            color: #fff;
            font-weight: 700;
            background: #d02928;
            border: none;
            margin-top: 15px;
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            border-radius: 3px;
            cursor: pointer;
            overflow: visible;
            margin-right: 10px;
          }

          p{
            font-size:.28rem;
            color:#666
          }
          
          a{
            font-size:.28rem;
            color:#0881ed;
          }

          span{
            font-size:.28rem;
            color:#999
          }
      }

      .mint-pop{
         width: 80%;
         padding: 20px 10px;
        .picker-slot-wrapper, .picker-item {
          backface-visibility: hidden;
        }
      }
    }

</style>
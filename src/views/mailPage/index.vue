
<template>
  <div class="m-campusNews">
    <ul>
      <li v-for="item in mailList">
        <mt-mailItem :item=item></mt-mailItem>
      </li>
    </ul>
  </div>
</template>

<script>

  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
  import mailItem from '../../components/mail/mailsItem/index.vue';

  export default {
      props: ['myTitle'],

      data () {
          return{
          }
      },
      computed:{
          ...mapState({
              mailList: state => state.myPage.mailList
          })
      },
      methods:{
        ...mapActions([
            'getMailList'
        ]),
    },
    components: {
      'mt-mailItem':mailItem
    },
    mounted () {
      this.getMailList();
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
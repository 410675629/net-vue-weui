
<template>
  <a class="list_item js_post" href="http://mp.weixin.qq.com/s?__biz=MzAxNDIzMDQwNg==&amp;mid=2651374351&amp;idx=1&amp;sn=2e969c7562ef178c36211c2f6607c26d&amp;scene=19#wechat_redirect">
    <div class="cover">
      <img class="img js_img" src="http://mmbiz.qpic.cn/mmbiz_png/VfRCotewWwdAP6eawrXmzyWiaQfuVo8GDRCBsL2YbAOTgnsvB4TKzJjO97CovaUyLc0ETpPkoUicJeryeCehwe3w/0?wx_fmt=png" alt=""></div>
    <div class="cont">
      <h2 class="title js_title">{{item.title}}</h2>
      <p class="desc">{{item.desc}}</p>
    </div>
  </a>
</template>

<script>

  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
  export default {
    props: ['item'],
    
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
  
  .list_item{
    display: block;
    padding: 15px 15px 10px 10px;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }

  .list_item .cover {
    float: left;
    margin-right: 10px;
  }

.list_item .cover .img {
    display: block;
    width: 80px;
    height: 60px;
}

.list_item .cont {
    overflow: hidden;
}

.list_item .cont .title {
    font-weight: 400;
    font-size: 16px;
    color: #000;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}

.list_item .cont .desc {
    font-size: 13px;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-height: 1.3;
}

</style>
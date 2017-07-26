
<template>
  <div>
    <a class="list_item js_post" :href=item.contentUrl>
      <div>
        <div class="cover">
          <!-- <img class="img js_img" :src=item.imgUrl alt=""></div> -->
          <img class="img js_img" src="../../../../assets/images/4.png" alt=""></div>
        <div class="cont">
          <h2 class="title js_title">{{item.title}}</h2>
          <p class="desc">{{item.dsc}}</p>
        </div>
      </div>
    </a>
    <div class="solid">

    </div>
  </div>

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
    },

    computed:{

    }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
  a{
    display: block;
  }
  .list_item{
    display: block;
    padding: 0.3rem 0.3rem 0.2rem 0.2rem;
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
    width: 1.8rem;
    height: 1.73rem;
    border-radius:0.08rem;
}

.list_item .cont {
    overflow: hidden;
}

.list_item .cont .title {
    margin-top: 0.05rem;
    font-weight: 400;
    font-size: 0.32rem;
    color: #000;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}
.solid{
  width: 6.9rem;
  border-bottom: 0.02rem solid #efefef;
  margin: 0 auto;
}
.list_item .cont .desc {
    margin-top: 0.24rem;
    font-size: 0.26rem;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-height: 1.3;
}

</style>
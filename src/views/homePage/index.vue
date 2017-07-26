<template>
    <div>
        <mt-swipe :auto="0">

          <mt-swipe-item class="slide" v-for="item in campusList">
              <!-- <img v-bind:src=item.imgUrl> -->
              <a :href=item.contentUrl>
                <img src='../../assets/images/1.png'>
              </a>
          </mt-swipe-item>
        </mt-swipe>

      <!-- 校招动态-->
      <mt-campusNews my-title ='校招动态' class="m-header" :campusList="campusList"></mt-campusNews>
    </div>
</template>

<script>

import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
import {CellSwipe,Swipe,SwipeItem,Range} from 'mint-ui';
import CampusNews from '../campusNews/index.vue'; // 校招动态

export default {
    computed:{
        ...mapState({
            campusList: state => state.homePage.campusList,
            bannercampusList: state => state.homePage.bannercampusList
        })
    },
    data () {
        return {

      }
    },
    created() {
        //1. 首页接口 把第一I安数据分给banner，第二条数据分给校招动态。
        this.getCampusNews();
    },
    methods:{
        ...mapActions([
            'getCampusNews'
        ]),
    },
    components: {
      'mt-swipe-item':CellSwipe,
      'mt-swipe-item':SwipeItem,
      'mt-swipe':Swipe,
      'mt-range':Range,
      'mt-campusNews':CampusNews
    },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
h1 {
color: #42b983;
}

.mint-swipe{
    width: 100%;
    height: 3.2rem;
    img{
        display: inline-block;
        width: 6.9rem;
        height: 3rem;
    }
    .slide{
        border-radius:0.08rem;
        padding:0.3rem  0.3rem  0rem 0.3rem;
        width: 6.9rem;
        height: 3.2rem;
        text-align: center;
    }

    .mint-swipe-indicators {
        width: 0.8rem;
        height: 0.6rem;
        bottom: -50px;
    }
}

</style>

<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ $route.params[0]}}</p>   
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data () {
      return {
        title: 'ERROR!',
      }
    },
    computed: mapState({

      // es5 写法
      /*message: function (state){
        return state.cart.message
      }*/

      // es6 写法
      message : state=>state.cart.message,
    }),

    mounted: function () {
      this.$store.commit('MESSAGE', '404 Not Found！!');
      alert(this.$store.getters.cart.message)
    }
  }
</script>
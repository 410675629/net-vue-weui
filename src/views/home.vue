<template>
  <div>
   <!--  <c-title :text="title" :hide="true" v-on:greet="greet"></c-title> -->
    <p>{{ message||'home' }}</p>
    <button v-on:click="greet">Greet</button>
    <button-counter v-on:increment="incrementTotal">
    </button-counter>
    <div>HOME {{ $route.params.id }}</div>
    <input type="text" name="" value="" placeholder="" @keyup.alt.67="clear">
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  //import cTitle from 'components/title';
 /* import buttonCounter from 'components/buttonCounter'*/;

  export default {
    data () {
      return {
        title: 'home',
        name:'zzhang'
      }
    },
    /*computed: mapState([
      'home'
    ]),*/

    methods:{
      clear:function(){
        alert('alt + c')
      },
      greet: function (event) {
        // `this` 在方法里指当前 Vue 实例
        alert('Hello ' + this.name + '!')
        // `event` 是原生 DOM 事件
        alert(event.target.tagName)
      },
      incrementTotal: function () {
        this.total += 1
      }
    },
    components: {/*cTitle,*/buttonCounter}
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
  .Alert_close{
    font-weight: bold;
    cursor: pointer;
  }

  .Alert--Success{
    color:green;
  }

  .Alert--Warning{
    color:#aa0;
  }

  .Alert-Error{
    color:red;
  }
</style>

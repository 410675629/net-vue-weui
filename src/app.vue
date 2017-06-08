
<!--suppress ALL -->
<template>
  <div id="app">
      <router-view class="g-body"></router-view>   
      <router-view name="copyright"></router-view>   
      <remote src="https://webzj.reg.163.com/webapp/javascript/page/json3.js"></remote>
      <remote  src="https://webzj.reg.163.com/webapp/javascript/message.js?v=123456"></remote>
  </div>
</template>

<script>

  import loginConfig from './lib/loginConfig.js';

  export default {
    data () {
      return {
  
        'user':{
              userName:'admin'
        }
      }
    },

    components: {
     'remote': {
        render(createElement) {
          return createElement('script', { attrs: { type: 'text/javascript', src: this.src }});
        },
        props: {
          src: { type: String, required: true },
        },
      },
    },

/*     mounted() {
        debugger;
        console.log(loginConfig)
        const urs    = new URS(loginConfig);
        urs.showIframe();
        urs.logincb=function(){
          debugger;
          console.log('=======');
          console.log(this)
        }
    },*/


    methods: {


      /**
       * 退出登录
       * @return {[type]} [description]
       */
      logout() {
        alert('退出')
      }
    
    },


  }

</script>

<style lang="scss" rel="stylesheet/scss">

  @import './baseCss/index.scss';

  #app {
    width:100%;
    color: #2c3e50;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    .g-body{
      width: $body-width;
    }
  }

</style>

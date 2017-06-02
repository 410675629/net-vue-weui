
<template>
  <div class="g-ft f-tac f-m">


      <p v-time></p>
      ©1997-{{nowYear}}网易公司版权所有
  </div>
</template>

<script>

import style from '../baseCss/index.scss';
  
  /**
   * 版权所有
   * @zhang itiswell@163.com
   * @type {[type]}
   */
  export default {
    data () {
    	return {
        msg: 'hello!',
        nowYear : new Date().getFullYear()
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../baseCss/index.scss";
  .g-ft {
    width: $body-width ;
    height:40px;
    margin-top:20px;
    line-height:40px;
  }
</style>


<template>
	<div class="g-hd">
		
	</div>
</template>

<script>
  import {Search } from 'mint-ui';
  export default {
    data () {
    	return {
	        'user':{
	            userName:'admin'
	        }
	    }
    },

    methods:{
    	/**
		 * 退出登录
		 * @return {[type]} [description]
		 */
		logout() {
			request.logout(function(){
				location.href="/login"
			},this.error)
		}
    },

    components:{
    	'mt-search':Search
    }
  }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
	@import '../baseCss/index.scss';
</style>

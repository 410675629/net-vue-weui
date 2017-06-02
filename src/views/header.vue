
<template>
	<div class="g-hd">
		<div class="m-hd f-cb">
			<div class="u-logo f-fl">
				<img src="../assets/images/logo.png" class="f-vam">
				<span>校园招聘-3.0</span>
			</div>
			<div class="u-link f-fl">
				<router-link to="/index">首页</router-link>
			    <router-link to="/campus">校园招聘</router-link>
			    <router-link to="/internship">实习招聘</router-link>
			    <router-link to="/netease">走进网易</router-link>
			    <router-link to="/share">员工分享</router-link>
			    <router-link to="/media">视频专享</router-link>
			    <router-link to="/myapply">我的招聘</router-link>
			</div>
			<div class="u-userInfo f-fr">
				<span >{{user.userName}}&nbsp;&nbsp;</span>|<span class="f-csp" @click=logout>
					&nbsp;&nbsp;退出 <i class="user-exit"></i>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
  import routes from '../routes/index';
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
    }
  }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
	@import '../baseCss/index.scss';
	.g-hd {
		color: #fff;
		position:fixed;
		top:0px;
		margin:0 auto;
		z-index: 9999;
	    width:100%;
	    line-height: 60px;
	    border-top: 2px solid #fa7d3c;
	    background-color: rgba(32, 46, 66, 1);
	    box-sizing: border-box;
	    border-radius: 0px;
	    -moz-box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
	    -webkit-box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
	    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
	    .m-hd {
	        margin:0 auto;
	        width: 1190px;
	        
	        .u-logo{
	        	cursor: pointer;
	            position:relative;
	            float:left;
		        height: 60px;
		        line-height: 60px;
		        font-size: $fontsize-big;
	        }
			
			.u-link{
				margin-left:100px; 
				a{
		        	width: 100px;
		        	display: inline-block;
		        }
			}

	       	.router-link-active{
	       		color: #fff;
	       	}

	      	/**用户信息**/
	      	.u-userInfo {
		        margin-right: 10px;
	      	}
  		}
	}
</style>

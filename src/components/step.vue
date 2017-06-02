<template>	
	<div>
	 	<el-steps :space="space" :active="active"  finish-status="success">
	      <el-step title="已完成"></el-step>
	      <el-step title="进行中"></el-step>
	      <el-step title="步骤 3"></el-step>
	  </el-steps>

    <el-button  type="default" @click=upActive >上一步</el-button>
    <el-button  type="danger"  @click=nextActive >下一步</el-button>
  </div>

</template>

<script>

  import {mapMutations,mapActions} from 'vuex';

  export default {
    
    props:['active','space'],

    data () {},

    methods:{
      nextActive:function(){
        if(this.active==3){
          return
        }
        this.active++;
      },

      upActive:function(){
        if(this.active==0){
          return
        }
        this.active--;
      }
    },

    event:{
    
    },

    computed:{
      ...mapActions ({
        changeActive: 'changeActive'
      })
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>

</style>

<template>
    <div >
        <router-link :to="{ name: 'mailDetailPage', params: { id: item.id}}">
            <mt-cell :title=item.title is-link class="mailItem">
                <span style="color:#999999;">{{item.createTime}}</span>
            </mt-cell>
        </router-link>
    </div>

</template>

<script>
    import { Cell } from 'mint-ui';
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';

    export default {

        props: ['item'],

        data () {
            return {

            }
        },

        methods:{

            ...mapActions([

            ])
        },

        computed:{
            ...mapState({
            })
        },

        components: {
            'mt-cell':Cell
        },
    }
</script>


<style lang="scss" rel="stylesheet/scss" scoped>
    .mint-cell{
        min-height :1rem;
    }
    .mint-cell-wrapper{
        font-size:0.3rem;
    }
    .mint-cell:last-child{
        background-size:0 0;
    }
</style>

/**
 * Created by hzgaoquankang on 2017/7/22.
 */
/**
 * 基于 express 的接口处理定义
 */

module.exports = {
    api: '/api/campus/personal/mailList',
    response: function (req, res) {
        res.send({
            code:200,
            data:{
                list:[{
                    id:'1212',
                    title:'网易2017春招实习生录用函',
                    createTime:'2017-08-01',
                    readFlag:0 //未读
                },{
                    id:'1212',
                    title:'网易2017春招实习生录用函',
                    createTime:'2017-08-01',
                    readFlag:0 //未读
                }],
                pages:1,//当前页面
                pageSize:10,//当前页数
                total:2// 总页数
            },
            msg:'请求成功',
        });
    }
}


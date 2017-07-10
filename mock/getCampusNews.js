/**
 * 基于 express 的接口处理定义
 */

module.exports = {
  api: '/api/getCampusNews',
  response: function (req, res) {
    res.send({
      code:200,
      data:[{
        id:1,
        date: '2016-05-02',
        name: '王小虎',
        title:'报告，云音乐又来招人了！',
        desc:'去校园搞事情，',
        imgSrc:'http://img4q.duitang.com/uploads/item/201505/10/20150510055619_ZhsMQ.thumb.224_0.jpeg'
      }, {
        id:2,
        date: '2016-05-04',
        name: '王小虎',
        title:'报告，云音乐又来招人了！',
        desc:'去校园搞事情，',
        imgSrc:'http://img4q.duitang.com/uploads/item/201505/10/20150510055619_ZhsMQ.thumb.224_0.jpeg'
      }],
      msg:'登录成功',
    });
  }
}


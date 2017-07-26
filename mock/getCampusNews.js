/**
 * 基于 express 的接口处理定义
 */

module.exports = {
  api: '/api/campus/index/campusNewsList',
  response: function (req, res) {
    res.send({
      code:200,
      data:[{
        "id":"11212",
        "title":"2017网易春招开始",//文章标题
        "dsc":"2017网易春招开始辣2017网易春招开始辣",//文章描述
        "contentUrl":"http://mp.weixin.qq.com/s?__biz=MzAxNDIzMDQwNg==&amp;mid=2651374351&amp;idx=1&amp;sn=2e969c7562ef178c36211c2f6607c26d&amp;scene=19#wechat_redirect",//文章地址
        "imgUrl":"http://flv5ac2481d.live.126.net***",//图片地址
        "flag":1,// 0 代表头部，1代表校招动态
      }, {
        "id":"11212",
        "title":"2017网易春招开始",//文章标题
        "dsc":"2017网易春招开始辣2017网易春招开始辣",//文章描述
        "contentUrl":"http://mp.weixin.qq.com/s?__biz=MzAxNDIzMDQwNg==&amp;mid=2651374351&amp;idx=1&amp;sn=2e969c7562ef178c36211c2f6607c26d&amp;scene=19#wechat_redirect",//文章地址
        "imgUrl":"http://flv5ac2481d.live.126.net***",//图片地址
        "flag":1,// 0 代表头部，1代表校招动态
      }, {
        "id":"11212",
        "title":"2017网易春招开始",//文章标题
        "dsc":"2017网易春招开始辣2017网易春招开始辣",//文章描述
        "contentUrl":"http://mp.weixin.qq.com/s?__biz=MzAxNDIzMDQwNg==&amp;mid=2651374351&amp;idx=1&amp;sn=2e969c7562ef178c36211c2f6607c26d&amp;scene=19#wechat_redirect",//文章地址
        "imgUrl":"../../assets/images/1.png",//图片地址
        "flag":0,// 0 代表头部，1代表校招动态
      },{
        "id":"11212",
        "title":"2017网易春招开始",//文章标题
        "dsc":"2017网易春招开始辣2017网易春招开始辣",//文章描述
        "contentUrl":"http://mp.weixin.qq.com/s?__biz=MzAxNDIzMDQwNg==&amp;mid=2651374351&amp;idx=1&amp;sn=2e969c7562ef178c36211c2f6607c26d&amp;scene=19#wechat_redirect",//文章地址
        "imgUrl":"../../assets/images/1.png",//图片地址
        "flag":0,// 0 代表头部，1代表校招动态
      }],
      msg:'登录成功',
    });
  }
}


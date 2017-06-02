/**
 * 基于 express 的接口处理定义
 */

module.exports = {
  api: '/api/login',
  response: function (req, res) {
    res.send({
      code:200,
      data:{
        name:'admin'
      },
      msg:'登录成功',
    });
  }
}
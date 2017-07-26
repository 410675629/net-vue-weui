module.exports = {
  api: '/api/campus/personal/center',
  response: function(req, res) {
    res.send({
      "code": 200, //401 标记未登录
      "data": {
        "applyRecord": {
          "applyStatus": 13,
          "applyStatusName": '面试未通过',
          "applyPositionName": '软件开发-后台开发方向'
        },

        "newMailRemind": 5 // 站内信 0 代表 没有新站内信，不为0 代表有新站内信
      },
      "msg": "请求成功"
    });
  }
}
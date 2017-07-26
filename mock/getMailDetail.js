module.exports = {
  api: '/api/campus/personal/mailList/detail',
  response: function(req, res) {
    res.send({
      "code": 200, //401 标记未登录
      "data": {
        "title": '2017春招笔试通知',
        "content": '<h2>王小易同学：</h2><p>感谢参加2017网易互联网春招！<br/><button>接受面试</button>现邀请你参加笔试：</p><a href="http://www.baidu.com">http://www.baidu.com</a><br/><span>进入即可答题，如无法直接打开，请拷贝完整链接并粘贴至浏览器地址栏。），与您的信息绑定，请勿转发他人 ##这里会是一个按钮##。</span><h2 class="strong">重要注意事项</h2><p>1.请使用最新版chrome浏览器作答（44版本以上），并确保电脑带有摄像头（千万别作弊，作弊毁一生）；</p>'
      },
      "msg": "请求成功"
    });
  }
}
module.exports = {
    skin : 1,// 皮肤
    isHttps: 1,
    product : 'hzhr', // 产品ID
    promark : 'XRWjxVa',// 组件ID
    host : 'campus.163.com',// 组件所在域名
    single : 0,// 是否只用一个模块，1是，0否
    page : 'login',// 首屏
    placeholder : {account:'邮箱帐号或手机号',pwd:'6-16位密码，区分大小写'},
    coverBackground : "background:-webkit-radial-gradient(center,rgba(0,0,0,0.3),#000 75%);",
    iframeShowAnimation : "showAnimation .5s",
    errMode : 1,
    terms :[
      {
        'name' : '《自定义服务条款01》',
        'url'  : 'http://reg.163.com/agreement.shtml'
      }
    ], 
    logincb : function(){

      //window.location.reload();
    },                 //【可选】登录成功后回调，也可使用外部注入方式
    regcb : function(){
       window.location.reload();
    },                   //【可选】注册成功后回调，也可使用外部注入方式
  };
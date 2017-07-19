## 项目简介

基于 vue.js 的前端开发环境，用于前后端分离后的单页应用开发，可以在开发时使用 ES2015、scss 等最新语言特性。项目包含：

- 基础库: `vue.js`、`vue-router`、`vuex`、`whatwg-fetch`
- 编译/打包工具：`webpack`、`babel`、`node-sass`
- 单元测试工具：`karma`、`mocha`、`sinon-chai`
- 本地服务器：`express`

## 目录结构

    ├── README.md                       项目介绍
    ├── index.html                      入口页面
    ├── build                           构建脚本目录
    │   ├── build-server.js                 运行本地构建服务器，可以访问构建后的页面
    │   ├── build.js                        生产环境构建脚本
    │   ├── dev-client.js                   开发服务器热重载脚本，主要用来实现开发阶段的页面自动刷新
    │   ├── dev-server.js                   运行本地开发服务器
    │   ├── utils.js                        构建相关工具方法
    │   ├── webpack.base.conf.js            wabpack基础配置
    │   ├── webpack.dev.conf.js             wabpack开发环境配置
    │   └── webpack.prod.conf.js            wabpack生产环境配置
    ├── config                          项目配置
    │   ├── dev.env.js                      开发环境变量
    │   ├── index.js                        项目配置文件
    │   ├── prod.env.js                     生产环境变量
    │   └── test.env.js                     测试环境变量
    ├── mock                            mock数据目录
    │   └── hello.js
    ├── package.json                    npm包配置文件，里面定义了项目的npm脚本，依赖包等信息
    ├── src                             源码目录    
    │   ├── main.js                         入口js文件
    │   ├── app.vue                         根组件
    │   ├── components                      公共组件目录
    │   │   ├── login                          登录相关模块
    │   │   ├── home                           首页
    │   │   └── notfound.vue                   模块未找到
    │   ├── assets                          资源目录，这里的资源会被wabpack构建
    │   │   └── images
    │   │       └── logo.png
    │   ├── routes                          前端路由
    │   │   └── index.js
    │   ├── store                           应用级数据（state）
    │   │   └── index.js
    │   └── views                           页面目录
    │       ├── login                          登录相关模块
    │       ├── homePage                       首页
    │       ├── myPage                         我的页面
    │       └── other                          其他
    ├── static                          纯静态资源，不会被wabpack构建。
    └── test                            测试文件目录（unit&e2e）
        └── unit                            单元测试
            ├── index.js                        入口脚本
            ├── karma.conf.js                   karma配置文件
            └── specs                           单测case目录
                └── Hello.spec.js

## 环境安装

本项目依赖 node.js， 使用前先安装 node.js 和 cnpm（显著提升依赖包的下载速度）。
1. 自行下载并安装 node.js： [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
2. 然后安装 cnpm 命令：

        npm install -g cnpm --registry=https://registry.npm.taobao.org


## 快速开始

    cd vue-spa-template
    cnpm install
    npm run dev

## 命令列表：

    #开启本地开发服务器，监控项目文件的变化，实时构建并自动刷新浏览器，浏览器访问 http://localhost:8081
    npm run dev

    #使用生产环境配置构建项目，构建好的文件会输出到 "dist" 目录，
    npm run build

    #运行构建服务器，可以查看构建的页面
    npm run build-server

    #运行单元测试
    npm run unit
    
## 前后端分离

项目基于 spa 方式实现前后端分离，后端将所有 url 都返回到同一个 jsp 页面（由前端提供），此 jsp 页面也是前端的入口页面。然后路由由前端控制（基于vue-router），根据不同的 url 加载相应数据和组件进行渲染。

## 接口 mock

前后端分离后，开发前需要和后端同学定义好接口信息（请求地址，参数，返回信息等），前端通过 mock 的方式，即可开始编码，无需等待后端接口 ready。
项目的本地开发服务器是基于 express 搭建的，通过 express 的中间件机制，我们已经在 dev-server 中添加了接口 mock 功能。
开发时，接口的 mock 数据统一放在 mock 目录下，每个文件内如下：


    module.exports = {
    
      // 接口地址
      api: '/api/hello',
    
      // 返回数据 参考http://expressjs.com/zh-cn/4x/api.html
      response: function (req, res) {
        res.send(`
          <p>hello vue!</p>
        `);
      }
    }


## 模块化

开发时可以使用 ES2015 module 语法，构建时每个文件会编译成 amd 模块。

## 组件化

整个应用通过 vue 组件的方式搭建起来，通过 vue-router 控制相应组件的展现，组件树结构如下：

    app.vue                         根组件（整个应用只有一个）
        ├──view1.vue                    页面级组件，放在 views 目录里面，有子组件时，可以建立子目录
        │   ├──component1.vue               功能组件，公用的放在 components 目录，否则放在 views 子目录
        │   ├──component2.vue
        │   └──component3.vue
        ├──view2.vue
        │   ├──component1.vue
        │   └──component4.vue
        └──view3.vue
            ├──component5.vue
            ……


## 单元测试

可以为每个组件编写单元测试，放在 `test/unit/specs` 目录下面, 单元测试用例的目录结构建议和测试的文件保持一致（相对于src），每个测试用例文件名以 `.spec.js`结尾。
执行 `npm run unit` 时会遍历所有的 `spec.js` 文件，产出测试报告在 `test/unit/coverage` 目录。


## 联调方式

前后端分离后，由于服务端和前端的开发环境处于2台不同的机器上，前端的异步请求需要代理到后端机器中。
联调的时候，只需通过 proxy 参数运行 dev 脚本即可，所有 mock 目录下定义的接口将会转发到 proxy 参数指定的机器：

    # 172.16.36.90:8083 为后端机器的环境地址
    npm run dev -- --proxy=172.16.36.90:8083

这样，如果 mock 目录下有定义了接口 /api/hello ，将会转发到 http://172.16.36.90/:8083/api/hello


## 部署方案

分离后前后端代码会存放在2个单独的 git 仓库中，构建过程也是分开的。后端构建时，需要依赖前端的构建结果。具体流程如下：

1. pull 前端项目代码
2. 构建前端（构建结果放在dist目录）
3. pull 后端代码
4. 将前端的构建结果（dist目录里的文件）复制到后端工程中
5. 构建后端

提测时，此过程可以借助 jenkins 配置。上线时，需要运维同学配合修改上线脚本。

## 参考
   https://github.com/410675629/webpack-vue  相关语法，模块写法


##  2017年04月05日 创建master

    `创建master`

    1. 创建整个文件架构  
    2. restful api     http://www.ruanyifeng.com/blog/2014/05/restful_api.html 
    3. await fetch | 替代方案 【ajax】 https://github.com/mzabriskie/axios 

        + 使用ajax
         `
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.responseType = 'json';

            xhr.onload = function() {
              console.log(xhr.response);
            };

            xhr.onerror = function() {
              console.log("Oops, error");
            };

            xhr.send();
        `
        + 使用 Fetch+ES6 的 箭头函数 这种 Promise 的写法还是有 Callback 的影子

        ` 
        fetch('/api/login').then(response => response.json())
        .then(data => console.log(data))
        .catch(e => console.log("Oops, error", e))

        `
        备注：Fetch 请求默认是不带 cookie 的，需要设置 fetch(url, {credentials: 'include'})
              服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject。
        参考文档： https://github.com/camsong/blog/issues/2

## 2017年06月02日 引入vue-strap  ui 组件

## 2017年07月17日 引入markdown ，并制作指令

    `
    Vue.directive('marked',{
      //注意，这儿得使用bind钩子函数，因为我们使用此指令主要是为了写文档，
      //文档里不会有变量且一次性生成,而update在自定义指令所在模板变化时就会重新执行，
      //会影响渲染文档的方法，所以不能使用update钩子，也不能使用函数简写
      bind:function(el,binding,vnode){

        el.innerHTML = Marked(el.innerText);
      }
    })

    `
##  2017年07月19 架构调整
    


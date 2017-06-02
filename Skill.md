## 1 水平垂直居中
` 
	display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`


## 2 mapGetters 
  辅助函数仅仅是将 store 中的 getters 映射到局部计算属性

## 3 mapState 辅助函数帮助我们生成计算属性
 computed: mapState({
    // 箭头函数可使代码更简练
    count: state => state.count,

    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: 'count',

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  })

## 3 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）
methods: {
    ...mapActions([
      'increment' // 映射 this.increment() 为 this.$store.dispatch('increment')
    ]),
    ...mapActions({
      add: 'increment' // 映射 this.add() 为 this.$store.dispatch('increment')
    })
  }

## 4 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）

  // ...
  methods: {
    ...mapMutations([
      'increment' // 映射 this.increment() 为 this.$store.commit('increment')
    ]),
    ...mapMutations({
      add: 'increment' // 映射 this.add() 为 this.$store.commit('increment')
    })
  }



## 5  vue-router  相关技术点

+ pushState方法不会触发页面刷新，只是导致history对象发生变化，地址栏会有反应
history.pushState(null, null, 'https://twitter.com/hello');
pushState想要插入一个跨域的网址，导致报错
参考-》
http://javascript.ruanyifeng.com/bom/history.html

## 6 ELEMENT 按需引入

借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

npm install babel-plugin-component -D
然后，将 .babelrc 修改为：

{
  "presets": [
    ["es2015", { "modules": false }]
  ],
  "plugins": [["component", [
    {
      "libraryName": "element-ui",
      "styleLibraryName": "theme-default"
    }
  ]]]
}





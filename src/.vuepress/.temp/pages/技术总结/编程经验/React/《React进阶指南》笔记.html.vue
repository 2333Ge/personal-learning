<template><blockquote>
<p>原文：<a href="https://juejin.cn/book/6945998773818490884" target="_blank" rel="noopener noreferrer">《React 进阶指南》<ExternalLinkIcon/></a>
个人 demo: demo/react-demo
源码：</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git clone https://hub.fastgit.org/facebook/react.git
git checkout v16.19
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h1 id="认识-jsx" tabindex="-1"><a class="header-anchor" href="#认识-jsx" aria-hidden="true">#</a> 认识 JSX</h1>
<h2 id="jsx-被-react-处理成什么" tabindex="-1"><a class="header-anchor" href="#jsx-被-react-处理成什么" aria-hidden="true">#</a> JSX 被 React 处理成什么</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const toLearn = [ 'react' , 'vue' , 'webpack' , 'nodejs'  ]

const TextComponent = ()=> &lt;div> hello , i am function component &lt;/div>

class Index extends React.Component{
    status = false /* 状态 */
    renderFoot=()=> &lt;div> i am foot&lt;/div>
    render(){
        /* 以下都是常用的jsx元素节 */
        return &lt;div style={{ marginTop:'100px' }}   >
            { /* element 元素类型 */ }
            &lt;div>hello,world&lt;/div>
            { /* fragment 类型 */ }
            &lt;React.Fragment>
                &lt;div> 👽👽 &lt;/div>
            &lt;/React.Fragment>
            { /* text 文本类型 */ }
            my name is alien
            { /* 数组节点类型 */ }
            { toLearn.map(item=> &lt;div key={item} >let us learn { item } &lt;/div> ) }
            { /* 组件类型 */ }
            &lt;TextComponent/>
            { /* 三元运算 */  }
            { this.status ? &lt;TextComponent /> : &lt;div>三元运算&lt;/div> }
            { /* 函数执行 */ }
            { this.renderFoot() }
            &lt;button onClick={ ()=> console.log( this.render() ) } >打印render后的内容&lt;/button>
        &lt;/div>
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><ol>
<li>babel 编译：React.createElement, 注意 3 个参数作用
<img src="@source/image/技术总结/React/JSX-babel.awebp" alt=""></li>
<li>createElement 处理后的样子 注意转换类型的映照关系
<img src="@source/image/技术总结/React/jsx-creatElement.awebp" alt=""></li>
<li>React 底层调和处理后，终将变成什么？
React element 对象的每一个子节点都会形成一个与之对应的 fiber 对象，然后通过 sibling、return、child 将每一个 fiber 对象联系起来。</li>
</ol>
<h2 id="react-api" tabindex="-1"><a class="header-anchor" href="#react-api" aria-hidden="true">#</a> React API</h2>
<ul>
<li>React.Children.toArray，扁平化，规范化 children 数组</li>
<li>React.Children.forEach，遍历 children，内部已扁平化 children</li>
<li>React.createElement</li>
<li>react.cloneElement</li>
</ul>
<h2 id="qa" tabindex="-1"><a class="header-anchor" href="#qa" aria-hidden="true">#</a> QA</h2>
<ol>
<li>老版本的 React 中，为什么写 jsx 的文件要默认引入 React</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import React from 'react'
function Index(){
    return &lt;div>hello,world&lt;/div>
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>答：因为 jsx 在被 babel 编译后，写的 jsx 会变成上述 React.createElement 形式，所以需要引入 React，防止找不到 React 引起报错。</p>
<h1 id="component" tabindex="-1"><a class="header-anchor" href="#component" aria-hidden="true">#</a> Component</h1>
<p>可通过原型链的方式给类增加默认操作</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>class Index extends React.Component{
    constructor(...arg){
       super(...arg)                        /* 执行 react 底层 Component 函数 */
    }
    state = {}                              /* state */
    static number = 1                       /* 内置静态属性 */
    componentDidMount(){                    /* 生命周期 */
        console.log(Index.number,Index.number1) // 打印 1 , 2
    }
    render(){                               /* 渲染函数 */
        return &lt;div style={{ marginTop:'50px' }} onClick={ this.handerClick }  >hello,React!&lt;/div>
    }
}
Index.number1 = 2                           /* 外置静态属性 */
Index.prototype.handleClick = ()=> console.log(222) /* 方法: 绑定在 Index 原型链的 方法*/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>组件的继承：state 和生命周期会被继承后的组件修改。像下列 demo 中，Person 组件中的 componentDidMount 生命周期将不会被执行。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/* 人类 */
class Person extends React.Component{
    constructor(props){
        super(props)
        console.log('hello , i am person')
    }
    componentDidMount(){ console.log(1111)  }
    eat(){    /* 吃饭 */ }
    sleep(){  /* 睡觉 */  }
    ddd(){   console.log('打豆豆')  /* 打豆豆 */ }
    render(){
        return &lt;div>
            大家好，我是一个person
        &lt;/div>
    }
}
/* 程序员 */
class Programmer extends Person{
    constructor(props){
        super(props)
        console.log('hello , i am Programmer too')
    }
    componentDidMount(){  console.log(this)  }
    code(){ /* 敲代码 */ }
    render(){
        return &lt;div style={ { marginTop:'50px' } } >
            { super.render() } { /* 让 Person 中的 render 执行 */ }
            我还是一个程序员！    { /* 添加自己的内容 */ }
        &lt;/div>
    }
}
export default Programmer
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>类组件和函数组件的区别：</p>
<ol>
<li>类组件的本质就是 类和函数还有 oop 思想中的继承，在此之上需要内置处理 state 和 props 组件的状态维护，状态 -&gt; ui -&gt; 渲染</li>
<li>函数组件 没有实例化的概念，FP 思想，每个组件应该只处理一个逻辑事物不想 class 组件那么复合，另外它没有转态存储能力必须依赖 hook</li>
</ol>
<h2 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> State</h2>
<p>组件初始化过程中绑定了负责更新的 Updater 对象，对于如果调用 setState 方法，实际上是 React 底层调用 Updater 对象上的 enqueueSetState 方法。</p>
<h3 id="类组件" tabindex="-1"><a class="header-anchor" href="#类组件" aria-hidden="true">#</a> 类组件</h3>
<p><strong>unstable_batchedUpdates</strong>:异步环境下，继开启批量更新模式</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>setTimeout(()=>{
    unstable_batchedUpdates(()=>{
        this.setState({ number:this.state.number + 1 })
        console.log(this.state.number)
        this.setState({ number:this.state.number + 1})
        console.log(this.state.number)
        this.setState({ number:this.state.number + 1 })
        console.log(this.state.number)
    })
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>flushSync</strong>:提升更新优先级</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>handerClick=()=>{
    setTimeout(()=>{
        this.setState({ number: 1  })
    })
    this.setState({ number: 2  })
    ReactDOM.flushSync(()=>{
        this.setState({ number: 3  })
    })
    this.setState({ number: 4  })
}
render(){
   console.log(this.state.number)
   return ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="函数组件" tabindex="-1"><a class="header-anchor" href="#函数组件" aria-hidden="true">#</a> 函数组件</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[ ①state , ②dispatch ] = useState(③initData)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>注意 ② ③ 是函数的情况</li>
</ul>
<h3 id="qa-1" tabindex="-1"><a class="header-anchor" href="#qa-1" aria-hidden="true">#</a> QA</h3>
<ol>
<li>为什么异步环境中批量更新规则被打破， setState 后走 render??????宏微任务</li>
<li>useState 参数可以是个函数，初始值是函数执行后的结果？</li>
<li>RN 没有 ReactDOM.flushSync</li>
<li>legacy 模式，还有 blocking 模式、concurrent 模式概念</li>
<li>（图）合并 state 和调和树的顺序是否应该反过来</li>
<li>合并 state 的过程在哪儿</li>
<li>下列点击事件的打印结果</li>
<li>宏任务微任务？js 任务系统</li>
<li>useState 初始化对象是一个复杂对象的情况，改变初始对象，useState 的对象会改变吗</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>handleClick= () => {
          this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback1', this.state.number)  })
          console.log(this.state.number)
          this.setState({ number:this.state.number + 2 },()=>{   console.log( 'callback2', this.state.number)  })
          console.log(this.state.number)
          this.setState({ number:this.state.number + 3 },()=>{   console.log( 'callback3', this.state.number)  })
          console.log(this.state.number)
    }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>0, 0, 0, callback1 3 ,callback2 3 ,callback3 3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="自定义-hooks" tabindex="-1"><a class="header-anchor" href="#自定义-hooks" aria-hidden="true">#</a> 自定义 Hooks</h2>
<h3 id="qa-2" tabindex="-1"><a class="header-anchor" href="#qa-2" aria-hidden="true">#</a> QA</h3>
<ul>
<li>执行副作用、demo 好像有问题，敲一个</li>
</ul>
<h1 id="随记" tabindex="-1"><a class="header-anchor" href="#随记" aria-hidden="true">#</a> 随记</h1>
<ul>
<li>扁平化的意思？树形结构如何扁平化</li>
<li>fiber 对象</li>
</ul>
<h1 id="深入-props" tabindex="-1"><a class="header-anchor" href="#深入-props" aria-hidden="true">#</a> 深入 props</h1>
<h2 id="props-操作技巧" tabindex="-1"><a class="header-anchor" href="#props-操作技巧" aria-hidden="true">#</a> props 操作技巧</h2>
<p>抽象 Props 一般用于<strong>跨层级传递 props</strong>，一般不需要具体指出 props 中某个属性，而是将 props 直接传入或者是抽离到子组件中</p>
<h3 id="混入-props" tabindex="-1"><a class="header-anchor" href="#混入-props" aria-hidden="true">#</a> 混入 props</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Son</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span> hello<span class="token punctuation">,</span>world <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Father</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> fatherProps <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mes</span><span class="token operator">:</span> <span class="token string">"let us learn React !"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Son <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token operator">...</span>fatherProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> indexProps <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"alien"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">"28"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Father <span class="token punctuation">{</span><span class="token operator">...</span>indexProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>打印
<img src="@source/image/技术总结/React/props-to.awebp" alt="">
将 Index 组件 indexProps 抽象传递给 Son，一方面混入 fatherProps</p>
<h3 id="抽离-props" tabindex="-1"><a class="header-anchor" href="#抽离-props" aria-hidden="true">#</a> 抽离 props</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Son</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span> hello<span class="token punctuation">,</span>world <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Father</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> age<span class="token punctuation">,</span> <span class="token operator">...</span>fatherProps <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Son <span class="token punctuation">{</span><span class="token operator">...</span>fatherProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> indexProps <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"alien"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">"28"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mes</span><span class="token operator">:</span> <span class="token string">"let us learn React !"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Father <span class="token punctuation">{</span><span class="token operator">...</span>indexProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>将 indexProps 中的 age 属性抽离出来。</p>
<h3 id="隐式注入-props" tabindex="-1"><a class="header-anchor" href="#隐式注入-props" aria-hidden="true">#</a> 隐式注入 props</h3>
<p>React.cloneElement</p>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<ul>
<li>对 props 中 children 的操作，显示与否、判断类型做自己的渲染逻辑等</li>
<li>对 props 中的 children 的 props 操作，注入新的 props 等</li>
</ul>
<p>容器技巧 =&gt; 获取 children =&gt; 做自定义操作</p>
<h3 id="qa-3" tabindex="-1"><a class="header-anchor" href="#qa-3" aria-hidden="true">#</a> QA</h3>
<p>FormItem.displayName 为什么这么取 children.type.displayName</p>
<h1 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h1>
<ul>
<li>挂载
<img src="@source/image/技术总结/React/lifecycle-mont.awebp" alt=""></li>
</ul>
<p>constructor -&gt; getDerivedStateFromProps / componentWillMount -&gt; render -&gt; componentDidMount</p>
<ul>
<li>更新
<img src="@source/image/技术总结/React/lifecycle-update.awebp" alt=""></li>
</ul>
<p>componentWillReceiveProps( props 改变) / getDerivedStateFromProp -&gt; shouldComponentUpdate -&gt; componentWillUpdate -&gt; render -&gt; getSnapshotBeforeUpdate -&gt; componentDidUpdate</p>
<ul>
<li>
<p>销毁
commit 阶段调用 componentWillUnmount</p>
</li>
<li>
<p>总览
<img src="@source/image/技术总结/React/lifecycle-all-class.awebp" alt=""></p>
</li>
</ul>
<h2 id="各阶段要点" tabindex="-1"><a class="header-anchor" href="#各阶段要点" aria-hidden="true">#</a> 各阶段要点</h2>
<ul>
<li>getDerivedStateFromProps：只是静态方法、访问不到 this，组件更新，就会执行 getDerivedStateFromProps，不管是 props 改变，还是 setState ，或是 forceUpdate 。</li>
<li>getSnapshotBeforeUpdate: 获取 更新前 DOM 信息的最佳时期，getSnapshotBeforeUpdate 将返回一个值作为一个 snapShot(快照)，传递给 componentDidUpdate 作为第三个参数</li>
</ul>
<h1 id="context" tabindex="-1"><a class="header-anchor" href="#context" aria-hidden="true">#</a> context</h1>
<h2 id="consumer-的三种写法" tabindex="-1"><a class="header-anchor" href="#consumer-的三种写法" aria-hidden="true">#</a> consumer 的三种写法</h2>
<ul>
<li>useContext</li>
<li>函数式</li>
<li>contextType</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> ThemeContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 类组件 - contextType 方式</span>
<span class="token keyword">class</span> <span class="token class-name">ConsumerDemo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> color<span class="token punctuation">,</span> background <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">,</span> background <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">消费者</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
ConsumerDemo<span class="token punctuation">.</span>contextType <span class="token operator">=</span> ThemeContext<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Son</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ConsumerDemo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="provider-特性" tabindex="-1"><a class="header-anchor" href="#provider-特性" aria-hidden="true">#</a> Provider 特性</h2>
<ol>
<li>Provider 作为提供者传递 context ，provider 中 value 属性改变会使所有消费 context 的组件重新更新。</li>
<li>Provider 可以逐层传递 context，下一层 Provider 会覆盖上一层 Provider。</li>
</ol>
<h2 id="qa-4" tabindex="-1"><a class="header-anchor" href="#qa-4" aria-hidden="true">#</a> QA</h2>
<ul>
<li>contextType 底层如何处理的</li>
</ul>
<h2 id="拓展" tabindex="-1"><a class="header-anchor" href="#拓展" aria-hidden="true">#</a> 拓展</h2>
<ul>
<li>注意其中的例子：Provider value 改变 导致组件树重新渲染的例子
<blockquote>
<p>没有 memo 处理，useState 会让 ProviderDemo 重新 render ，此时 son 没有处理，就会跟随父组件 render</p>
</blockquote>
</li>
</ul>
<h1 id="高阶组件" tabindex="-1"><a class="header-anchor" href="#高阶组件" aria-hidden="true">#</a> 高阶组件</h1>
<p>高阶组件能复用哪些代码逻辑？</p>
<ul>
<li>渲染劫持：懒加载、动态加载、渲染与否、统一空展示、统一异常展示、替换节点等</li>
<li>混入 Props: 新增 props,传递已知 props 值，比如项目中想让一个非 Route 组件，也能通过 props 获取路由实现跳转，但是不想通过父级路由组件层层绑定 props ，这个时候就需要一个 HOC 把改变路由的 history 对象混入 props 中，于是 withRoute 诞生了。</li>
<li>监控组件内部状态：如对组件内的点击事件做一些监控，或者加一次额外的生命周期，对现有 props 做一些加工重新传递</li>
</ul>
<p>两种不同的高阶组件</p>
<ul>
<li>属性代理：无侵入、多层嵌套比较安全、低耦合，注意处理 Ref、静态属性</li>
<li>反向继承：便于绑定生命周期，无需处理 Ref、静态属性，多个反向继承会相互覆盖，耦合较高，需要知道原始组件</li>
</ul>
<h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2>
<ol>
<li>强化 props</li>
</ol>
<p>加入一些其他的 props ，强化原始组件功能</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 让组件也可以获取到路由对象，进行路由跳转等操作</span>
<span class="token keyword">function</span> <span class="token function">withRouter</span><span class="token punctuation">(</span><span class="token parameter">Component</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> displayName <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">withRouter(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Component<span class="token punctuation">.</span>displayName <span class="token operator">||</span> Component<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">C</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">/*  获取 */</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> wrappedComponentRef<span class="token punctuation">,</span> <span class="token operator">...</span>remainingProps <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>RouterContext<span class="token punctuation">.</span>Consumer<span class="token operator">></span>
        <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>Component
              <span class="token punctuation">{</span><span class="token operator">...</span>remainingProps<span class="token punctuation">}</span> <span class="token comment">// 组件原始的props</span>
              <span class="token punctuation">{</span><span class="token operator">...</span>context<span class="token punctuation">}</span> <span class="token comment">// 存在路由对象的上下文，history  location 等</span>
              ref<span class="token operator">=</span><span class="token punctuation">{</span>wrappedComponentRef<span class="token punctuation">}</span>
            <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>RouterContext<span class="token punctuation">.</span>Consumer<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token constant">C</span><span class="token punctuation">.</span>displayName <span class="token operator">=</span> displayName<span class="token punctuation">;</span>
  <span class="token constant">C</span><span class="token punctuation">.</span>WrappedComponent <span class="token operator">=</span> Component<span class="token punctuation">;</span>
  <span class="token comment">/* 继承静态属性 */</span>
  <span class="token keyword">return</span> <span class="token function">hoistStatics</span><span class="token punctuation">(</span><span class="token constant">C</span><span class="token punctuation">,</span> Component<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> withRouter<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2>
<ol>
<li>不要在函数组件内部或类组件 render 函数中使用 HOC</li>
</ol>
<p>每一次类组件触发 render 或者函数组件执行都会产生一个新的 WrapHome，react diff 会判定两次不是同一个组件，那么就会卸载老组件，重新挂载新组件，造成新能浪费</p>
<ol start="2">
<li>处理 Ref</li>
<li>处理静态属性</li>
<li>多 HOC 时 注意是否会相互影响</li>
</ol>
<h1 id="渲染控制" tabindex="-1"><a class="header-anchor" href="#渲染控制" aria-hidden="true">#</a> 渲染控制</h1>
<p>useMemo 原理：useMemo 会记录上一次执行 create 的返回值，并把它绑定在函数组件对应的 fiber 对象上，只要组件不销毁，缓存值就一直存在，但是 deps 中如果有一项改变，就会重新执行 create ，返回值作为新的值记录到 fiber 对象上</p>
<p>注意给组件 props 传箭头函数、对象的情况，会使 PureComponent 失效</p>
<p>React.memo 当二个参数 compare 不存在时，会用浅比较原则处理 props ，相当于仅比较 props 版本的 pureComponent</p>
<p>打破渲染限制：</p>
<ol>
<li>
<p>forceUpdate。类组件更新如果调用的是 forceUpdate 而不是 setState ，会跳过 PureComponent 的浅比较和 shouldComponentUpdate 自定义比较。其原理是组件中调用 forceUpdate 时候，全局会开启一个 hasForceUpdate 的开关。当组件更新的时候，检查这个开关是否打开，如果打开，就直接跳过 shouldUpdate 。</p>
</li>
<li>
<p>context 穿透，上述的几种方式，都不能本质上阻断 context 改变，而带来的渲染穿透，所以开发者在使用 Context 要格外小心，既然选择了消费 context ，就要承担 context 改变，带来的更新作用。</p>
</li>
</ol>
<p>渲染流程图
<img src="@source/image/技术总结/React/render-step.awebp" alt=""></p>
<h1 id="事件原理" tabindex="-1"><a class="header-anchor" href="#事件原理" aria-hidden="true">#</a> 事件原理</h1>
<ul>
<li>阻止冒泡：React 中如果想要阻止事件向上冒泡，可以用 e.stopPropagation()</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* 阻止事件冒泡，handleFatherClick 事件讲不在触发 */</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleFatherClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"冒泡到父级"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleFatherClick<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span><span class="token operator">></span>点击<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h1 id="fiber" tabindex="-1"><a class="header-anchor" href="#fiber" aria-hidden="true">#</a> Fiber</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">FiberNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>tag <span class="token operator">=</span> tag<span class="token punctuation">;</span> <span class="token comment">// fiber 标签 证明是什么类型fiber。</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> key<span class="token punctuation">;</span> <span class="token comment">// key调和子节点时候用到。</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// dom元素是对应的元素类型，比如div，组件指向组件对应的类或者函数。</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>stateNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 指向对应的真实dom元素，类组件指向组件实例，可以被ref获取。</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>return <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 指向父级fiber</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>child <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 指向子级fiber</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>sibling <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 指向兄弟fiber</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 索引</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>ref <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// ref指向，ref函数，或者ref对象。</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>pendingProps <span class="token operator">=</span> pendingProps<span class="token punctuation">;</span> <span class="token comment">// 在一次更新中，代表element创建</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>memoizedProps <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 记录上一次更新完毕后的props</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>updateQueue <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 类组件存放setState更新队列，函数组件存放</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>memoizedState <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 类组件保存state信息，函数组件保存hooks信息，dom元素为null</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>dependencies <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// context或是时间的依赖项</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>mode <span class="token operator">=</span> mode<span class="token punctuation">;</span> <span class="token comment">//描述fiber树的模式，比如 ConcurrentMode 模式</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>effectTag <span class="token operator">=</span> NoEffect<span class="token punctuation">;</span> <span class="token comment">// effect标签，用于收集effectList</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>nextEffect <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 指向下一个effect</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>firstEffect <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 第一个effect</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>lastEffect <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 最后一个effect</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>expirationTime <span class="token operator">=</span> NoWork<span class="token punctuation">;</span> <span class="token comment">// 通过不同过期时间，判断任务是否过期， 在v17版本用lane表示。</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>alternate <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">//双缓存树，指向缓存的fiber。更新阶段，两颗树互相交替。</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="render-commit" tabindex="-1"><a class="header-anchor" href="#render-commit" aria-hidden="true">#</a> render &amp; commit</h2>
<h3 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> render</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// react-reconciler/src/ReactFiberWorkLoop.js</span>

<span class="token keyword">function</span> <span class="token function">workLoop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>workInProgress <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    workInProgress <span class="token operator">=</span> <span class="token function">performUnitOfWork</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>调和过程中，每一个发生更新的 fiber 都会作为一次 workInProgress</p>
<p>workLoop 就是执行每一个单元的调度器，如果渲染没有被中断，那么 workLoop 会遍历一遍 fiber 树</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// react-reconciler/src/ReactFiberWorkLoop.js</span>

<span class="token keyword">function</span> <span class="token function">performUnitOfWork</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  next <span class="token operator">=</span> <span class="token function">beginWork</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> unitOfWork<span class="token punctuation">,</span> renderExpirationTime<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 按照 child 指针逐层向下调和，期间会执行函数组件，实例类组件，diff 调和子节点，打不同effectTag。</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    next <span class="token operator">=</span> <span class="token function">completeUnitOfWork</span><span class="token punctuation">(</span>unitOfWork<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 向上归并的过程，如果有兄弟节点，会返回 sibling兄弟，没有返回 return 父级，一直返回到 fiebrRoot ，期间可以形成effectList，对于初始化流程会创建 DOM ，对于 DOM 元素进行事件收集，处理style，className等。</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>总结 beginWork 作用如下：</p>
<p>对于组件，执行部分生命周期，执行 render ，得到最新的 children 。
向下遍历调和 children ，复用 oldFiber ( diff 算法)，diff 流程在第十二章已经讲过了。
打不同的副作用标签 effectTag ，比如类组件的生命周期，或者元素的增加，删除，更新。</p>
<p>completeUnitOfWork 的流程是自下向上的，那么 completeUnitOfWork 过程主要做写什么呢？</p>
<p>首先 completeUnitOfWork 会将 effectTag 的 Fiber 节点会被保存在一条被称为 effectList 的单向链表中。在 commit 阶段，将不再需要遍历每一个 fiber ，只需要执行更新 effectList 就可以了。
completeWork 阶段对于组件处理 context ；对于元素标签初始化，会创建真实 DOM ，将子孙 DOM 节点插入刚生成的 DOM 节点中；会触发 diffProperties 处理 props ，比如事件收集，style，className 处理，在 15 章讲到过。</p>
<h3 id="commit" tabindex="-1"><a class="header-anchor" href="#commit" aria-hidden="true">#</a> commit</h3>
<p>主要做的事就是执行 effectList，更新 DOM，执行生命周期，获取 ref 等操作</p>
<h3 id="调和-异步调度-流程总图" tabindex="-1"><a class="header-anchor" href="#调和-异步调度-流程总图" aria-hidden="true">#</a> 调和 + 异步调度 流程总图</h3>
<p><img src="@source/image/技术总结/React/fiber-async.awebp" alt=""></p>
<h2 id="question" tabindex="-1"><a class="header-anchor" href="#question" aria-hidden="true">#</a> Question</h2>
<ul>
<li>什么是 fiber ？</li>
<li>Fiber 架构解决了什么问题？</li>
<li>Fiber root 和 root fiber 有什么区别？</li>
<li>不同 fiber 之间如何建立起关联的？</li>
<li>React 调和流程？</li>
<li>两大阶段 commit 和 render 都做了哪些事情？</li>
<li>什么是双缓冲树？</li>
<li>有什么作用？</li>
<li>Fiber 深度遍历流程？</li>
<li>Fiber 的调和能中断吗？</li>
<li>如何中断？</li>
<li>假设某个 5 层 Fiber 数已经创建完毕，3 层发生更新时，调和从什么地方开始调和</li>
<li>element 和 Fiber 如何联系起来的</li>
</ul>
<h1 id="hooks-原理" tabindex="-1"><a class="header-anchor" href="#hooks-原理" aria-hidden="true">#</a> Hooks 原理</h1>
<h2 id="questions" tabindex="-1"><a class="header-anchor" href="#questions" aria-hidden="true">#</a> Questions</h2>
<p>① React Hooks 为什么必须在函数组件内部执行？React 如何能够监听 React Hooks 在外部执行并抛出异常。
② React Hooks 如何把状态保存起来？保存的信息存在了哪里？
③ React Hooks 为什么不能写在条件语句中？
④ useMemo 内部引用 useRef 为什么不需要添加依赖项，而 useState 就要添加依赖项。
⑤ useEffect 添加依赖项 props.a ，为什么 props.a 改变，useEffect 回调函数 create 重新执行。
⑥ React 内部如何区别 useEffect 和 useLayoutEffect ，执行时机有什么不同？</p>
<h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h2>
<h1 id="随记-1" tabindex="-1"><a class="header-anchor" href="#随记-1" aria-hidden="true">#</a> 随记</h1>
<ul>
<li>如何分享</li>
<li>全局异常捕获+人工反馈</li>
<li>每章以后需要知道该章要点,相关问题面试时可能问到</li>
</ul>
</template>

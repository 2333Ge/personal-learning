<template><h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1>
<ul>
<li>原书：https://juejin.cn/book/6844733819363262472</li>
<li>demo: demo/gradle-demo</li>
</ul>
<h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1>
<!-- https://juejin.cn/book/6844733819363262472/section/6844733819417788429 -->
<h1 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world" aria-hidden="true">#</a> Hello World</h1>
<p>执行 gradle 时, Gradle 会从当前目录中寻找名为 &quot;build.gradle&quot; 或 &quot;build.gradle.kts&quot; 的文件</p>
<h1 id="传递参数" tabindex="-1"><a class="header-anchor" href="#传递参数" aria-hidden="true">#</a> 传递参数</h1>
<!-- https://juejin.cn/book/6844733819363262472/section/6844733819421982728 -->
<p>命令行参数 &gt; GRADLE_USER_HOME gradle.properties 文件 &gt; 项目根目录 gradle.properties 文件</p>
<blockquote>
<p>Gradle User Home(在哪儿？？)
User Home 中主要保存全局配置, 全局初始化脚本以及依赖的缓存和日志等文件. 如果开启 build cache 的话, 构建缓存也会存在这里共所有项目共享.</p>
</blockquote>
<p>关键词：增量编译(Incremental Build) 与 缓存(Caching)、参数</p>
<h1 id="任务-task" tabindex="-1"><a class="header-anchor" href="#任务-task" aria-hidden="true">#</a> 任务(Task)</h1>
<p>??? delegate properties</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code>tasks<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"foo"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"..."</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>tasks 是脚本的 &quot;全局变量&quot;, 用于创建和管理各式各样的任务</p>
<h2 id="_1-创建-task" tabindex="-1"><a class="header-anchor" href="#_1-创建-task" aria-hidden="true">#</a> 1. 创建 task</h2>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token comment">// 方式1： 通过 name 注册 task</span>
tasks<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"foo"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 配置阶段</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"configure phase..."</span></span><span class="token punctuation">)</span>

    doLast <span class="token punctuation">{</span>
        <span class="token comment">// 执行阶段</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"execution phase..."</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// ？？方式2：通过 Kotlin delegate properties 创建任务</span>
<span class="token keyword">val</span> bar <span class="token keyword">by</span> tasks<span class="token punctuation">.</span><span class="token function">creating</span> <span class="token punctuation">{</span>
  <span class="token operator">..</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
<span class="token comment">// 方式3：继承 DefaultTask</span>
<span class="token keyword">open</span> <span class="token keyword">class</span> HelloTask <span class="token operator">:</span> <span class="token function">DefaultTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">init</span> <span class="token punctuation">{</span>
        <span class="token comment">// 配置阶段</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"configure phase..."</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token annotation builtin">@TaskAction</span>
    <span class="token keyword">fun</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 执行阶段</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"execution phase..."</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

tasks<span class="token punctuation">.</span>create<span class="token operator">&lt;</span>HelloTask<span class="token operator">></span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"foo"</span></span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="_2-获取-task" tabindex="-1"><a class="header-anchor" href="#_2-获取-task" aria-hidden="true">#</a> 2. 获取 task</h2>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token comment">// 通过 name 获取 task</span>
tasks<span class="token punctuation">[</span><span class="token string-literal singleline"><span class="token string">"foo"</span></span><span class="token punctuation">]</span><span class="token punctuation">.</span>name
tasks<span class="token punctuation">.</span><span class="token function">getByName</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"foo"</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span>name
tasks<span class="token punctuation">.</span>getByName<span class="token operator">&lt;</span>Copy<span class="token operator">></span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"copy"</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span>destinationDir

<span class="token comment">//??? 通过 Kotlin delegate properties 获取</span>
<span class="token keyword">val</span> foo <span class="token keyword">by</span> tasks<span class="token punctuation">.</span>getting
<span class="token keyword">val</span> copy <span class="token keyword">by</span> tasks<span class="token punctuation">.</span><span class="token function">getting</span><span class="token punctuation">(</span>Copy<span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>如果某个 task 在另外的 project 中, 则需要指定 task 的路径</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code>tasks<span class="token punctuation">.</span><span class="token function">getByPath</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">":projectA:hello"</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span>path
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="gradle-自带-task" tabindex="-1"><a class="header-anchor" href="#gradle-自带-task" aria-hidden="true">#</a> Gradle 自带 task</h2>
<ul>
<li>Copy task</li>
<li>Zip/Jar/Tar task</li>
</ul>
<h2 id="任务依赖" tabindex="-1"><a class="header-anchor" href="#任务依赖" aria-hidden="true">#</a> 任务依赖</h2>
<ol>
<li>通过名称</li>
<li>通过 task 对象</li>
</ol>
<p>使用 <strong>task-tree</strong> 可查看 task 依赖关系</p>
<h2 id="任务执行顺序" tabindex="-1"><a class="header-anchor" href="#任务执行顺序" aria-hidden="true">#</a> 任务执行顺序</h2>
<p>shouldRunAfter 和 mustRunAfter</p>
<p>dependsOn &gt; shouldRunAfter</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">val</span> taskX <span class="token keyword">by</span> tasks<span class="token punctuation">.</span><span class="token function">creating</span> <span class="token punctuation">{</span>
    doLast <span class="token punctuation">{</span>
       <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"taskX"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">val</span> taskY <span class="token keyword">by</span> tasks<span class="token punctuation">.</span><span class="token function">creating</span> <span class="token punctuation">{</span>
    doLast <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"taskY"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

taskY <span class="token punctuation">{</span> <span class="token function">mustRunAfter</span><span class="token punctuation">(</span>taskX<span class="token punctuation">)</span> <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h1 id="gradle-生命周期" tabindex="-1"><a class="header-anchor" href="#gradle-生命周期" aria-hidden="true">#</a> Gradle 生命周期</h1>
<p>主题流程如图，大致分三阶段 Initialization -&gt; Configuration -&gt; Execution</p>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/30/16e1c9dc26469187~tplv-t2oaga2asx-watermark.awebp" alt=""></p>
<h2 id="initialization" tabindex="-1"><a class="header-anchor" href="#initialization" aria-hidden="true">#</a> Initialization</h2>
<p>Initialization 阶段主要目的是初始化构建,分为两个子过程</p>
<ol>
<li>一个是执行 Init Script</li>
<li>是执行 Setting Script</li>
</ol>
<p>Init script 初始化全局通用属性等，很少配置</p>
<p>Setting Script 初始化了一次构建所参与的所有模块，对于 Android 项目而言, 我们在根目录下看到的 settings.gradle(.kts) 就是 setting script. 几乎每个成规模的项目中都会有多个模块相互合作, setting script 正是组织和管理一个项目中所有模块(或者说子项目) 的脚本. 所有参与构建的项目都需要在 setting script 中描述, 本机任何位置的项目都可以通过 setting script 被引入到当前构建中.</p>
<h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2>
<p>执行所有 build.gradle(.kts)，创建对应 task
Task 组成的有向无环图便是在这个阶段生成的。</p>
<h2 id="execution" tabindex="-1"><a class="header-anchor" href="#execution" aria-hidden="true">#</a> Execution</h2>
<p>对于 Java 而言是调用 javac 编译源码, 然后打包成 jar. 对于 Android 而言则更加复杂些.</p>
<h2 id="生命周期-hook" tabindex="-1"><a class="header-anchor" href="#生命周期-hook" aria-hidden="true">#</a> 生命周期 Hook</h2>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/30/16e1c9dc26330d6a~tplv-t2oaga2asx-watermark.awebp" alt="生命周期Hook"></p>
<p>各 Hook 介绍可<a href="https://juejin.cn/book/6844733819363262472/section/6844733819421999118" target="_blank" rel="noopener noreferrer"><ExternalLinkIcon/></a></p>
<h1 id="init-script" tabindex="-1"><a class="header-anchor" href="#init-script" aria-hidden="true">#</a> Init Script</h1>
<p>由于 init script 主要任务是全局 gradle 配置, 因此 Api 分为三大部分: 获取全局属性, 项目配置, 生命周期 Hook.</p>
<p>由于 init script 是最早执行的脚本, 因此能监听几乎所有的事件</p>
<h2 id="常见用法" tabindex="-1"><a class="header-anchor" href="#常见用法" aria-hidden="true">#</a> 常见用法</h2>
<ol>
<li>为所有构建增加插件仓库</li>
</ol>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code>settingsEvaluated <span class="token punctuation">{</span> settings <span class="token operator">-></span>
    settings<span class="token punctuation">.</span><span class="token function">pluginManagement</span> <span class="token punctuation">{</span>
        repositories <span class="token punctuation">{</span>
            <span class="token function">maven</span><span class="token punctuation">(</span>url <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"../maven-repo"</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="2">
<li>对所有构建 应用 scan 插件</li>
</ol>
<p>用于优化构件速度、查看决议？？详情</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code>initscript <span class="token punctuation">{</span>
    repositories <span class="token punctuation">{</span>
        <span class="token function">gradlePluginPortal</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    dependencies <span class="token punctuation">{</span>
        <span class="token function">classpath</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"com.gradle:build-scan-plugin:2.1"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

rootProject <span class="token punctuation">{</span>
    apply<span class="token operator">&lt;</span>com<span class="token punctuation">.</span>gradle<span class="token punctuation">.</span>scan<span class="token punctuation">.</span>plugin<span class="token punctuation">.</span>BuildScanPlugin<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    configure<span class="token operator">&lt;</span>com<span class="token punctuation">.</span>gradle<span class="token punctuation">.</span>scan<span class="token punctuation">.</span>plugin<span class="token punctuation">.</span>BuildScanExtension<span class="token operator">></span> <span class="token punctuation">{</span>
        <span class="token function">publishAlways</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        termsOfServiceUrl <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"https://gradle.com/terms-of-service"</span></span>
        termsOfServiceAgree <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"yes"</span></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h1 id="setting-script" tabindex="-1"><a class="header-anchor" href="#setting-script" aria-hidden="true">#</a> Setting Script</h1>
<p>setting script 承担了统筹所有模块的重任, 因此 api 主要是在操作所参与构建的模块以及管理构建过程需要的插件.</p>
<h2 id="设置参与构建的模块" tabindex="-1"><a class="header-anchor" href="#设置参与构建的模块" aria-hidden="true">#</a> 设置参与构建的模块</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>include(":app", ":libs:someLibrary")

include(":anotherLibrary")
project(":anotherLibrary").projectDir = File(rootDir, "../another-library")
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="管理-plugin" tabindex="-1"><a class="header-anchor" href="#管理-plugin" aria-hidden="true">#</a> 管理 plugin</h2>
<p>使用场景举例</p>
<ol>
<li>指定仓库</li>
</ol>
<p>我们在 build script 中通过 plugins {...} 引入插件的时候, 默认只从 Gradle 官方插件仓库 查找. 如果我们的插件不在官方仓库, 就需要在这里指定查找的仓库:</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token comment">// setting script</span>

pluginManagement <span class="token punctuation">{</span>
    repositories <span class="token punctuation">{</span>
        <span class="token function">maven</span><span class="token punctuation">(</span>url <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"../maven-repo"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="2">
<li>模块替换功能</li>
</ol>
<p>在引用非 Gradle 官方 plugin 的时候常用</p>
<p>例如在 Android 中, plugins { id(&quot;com.android.application&quot;) } 中引用 android application 插件时, Gradle 默认查找名为 com.android.application:com.android.application.gradle.plugin:[version] 的插件, 而实际 google 仓库中, 插件的 id 是 com.android.tools.build:gradle:[version]</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token function">include</span><span class="token punctuation">(</span><span class="token operator">..</span><span class="token operator">..</span><span class="token punctuation">)</span>

pluginManagement <span class="token punctuation">{</span>
    repositories <span class="token punctuation">{</span>
        <span class="token operator">..</span><span class="token operator">..</span>
        <span class="token function">google</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    resolutionStrategy <span class="token punctuation">{</span>
        eachPlugin <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>requested<span class="token punctuation">.</span>id<span class="token punctuation">.</span>namespace <span class="token operator">==</span> <span class="token string-literal singleline"><span class="token string">"com.android"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">useModule</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"com.android.tools.build:gradle:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token expression">requested<span class="token punctuation">.</span>version</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ol start="3">
<li>plugin 设置统一版本</li>
</ol>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token comment">// setting script</span>

pluginManagement <span class="token punctuation">{</span>
    resolutionStrategy <span class="token punctuation">{</span>
        eachPlugin <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>requested<span class="token punctuation">.</span>id<span class="token punctuation">.</span>id <span class="token operator">==</span> <span class="token string-literal singleline"><span class="token string">"com.dorongold.task-tree"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">useVersion</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"1.4"</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h1 id="build-script" tabindex="-1"><a class="header-anchor" href="#build-script" aria-hidden="true">#</a> Build Script</h1>
<p>单模块构建的执行流程大致为: init script -&gt; setting script -&gt; build script
多模块的构建流程: init script -&gt; setting script -&gt; root build script -&gt; build script</p>
<h2 id="配置属性" tabindex="-1"><a class="header-anchor" href="#配置属性" aria-hidden="true">#</a> 配置属性</h2>
<p>配置, 实际上是对引入的插件进行配置. 原本 build script 中并没有 android {...} 这个 dsl 属性, 这是 plugin 提供的. 一旦应用了某个插件, 就可以使用插件提供的 dsl？？ 对其进行配置, 从而影响该模块的构建过程</p>
<p>以 Android 模块为例</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code>plugins <span class="token punctuation">{</span>
    <span class="token function">id</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"com.android.application"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

android <span class="token punctuation">{</span>
    <span class="token function">compileSdkVersion</span><span class="token punctuation">(</span><span class="token number">28</span><span class="token punctuation">)</span>

    defaultConfig <span class="token punctuation">{</span>
        <span class="token operator">..</span><span class="token operator">..</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>我们通过 <code>plugins { id(&quot;com.android.application&quot;) }</code> 引入了 android application 插件, 这个插件会在 Project 对象上增加 <code>android { .... }</code> 配置方法, 这也是为什么引入相应的插件后我们才能够对某些属性进行配置. 我们要做的就是在 build script 中调用插件提供的属性进行配置, 为插件工作提供必要的信息. 例如, 我们设置的 <code>android { compileSdkVersion(28) }</code> 就是告诉 Gradle &quot;使用 API 28 编译这个模块&quot;.</p>
<h2 id="内置属性" tabindex="-1"><a class="header-anchor" href="#内置属性" aria-hidden="true">#</a> 内置属性</h2>
<p>build script 背后是 Project 类型的对象， Project 对象 本身也提供了很多用于配置构建的 dsl,如：</p>
<ol>
<li>设置依赖查找仓库</li>
</ol>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code>allprojects <span class="token punctuation">{</span>
    repositories <span class="token punctuation">{</span>
        <span class="token function">google</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">jcenter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="2">
<li>如果某个依赖存在于我们的私有仓库中, 则可以通过 maven 方法设置私有仓库</li>
</ol>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code>repositories <span class="token punctuation">{</span>
    maven <span class="token punctuation">{</span>
        url <span class="token operator">=</span> <span class="token function">uri</span><span class="token punctuation">(</span><span class="token operator">..</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="3">
<li>如果 maven 仓库需要认证, 则通过 credentials 添加用户名密码:</li>
</ol>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code>repositories <span class="token punctuation">{</span>
    maven <span class="token punctuation">{</span>
        url <span class="token operator">=</span> <span class="token function">uri</span><span class="token punctuation">(</span><span class="token operator">..</span><span class="token punctuation">.</span><span class="token punctuation">)</span>

        credentials <span class="token punctuation">{</span>
            username <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"joe"</span></span>
            password <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"secret"</span></span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="4">
<li>设置自定义变量: ext
<img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/30/16e1c9f2c5ba1247~tplv-t2oaga2asx-watermark.awebp" alt=""></li>
</ol>
<h2 id="build-script-之间的引用及依赖" tabindex="-1"><a class="header-anchor" href="#build-script-之间的引用及依赖" aria-hidden="true">#</a> build script 之间的引用及依赖</h2>
<p>无论在哪个 build script 中, 都可以通过 rootProject 获取到 root build script 所对应的对象. 父模块可以通过 subprojects 获取到所有的子模块, 子模块可以通过 parent 获取到父模块. 如果两个模块之间没有直系关系, 则可以通过 findProject 引用.</p>
<blockquote>
<p>在多项目构建中, 通常 repositories 出现在 root build script 中, 而 module build script 中只包含 dependencies {...} 部分</p>
</blockquote>
<blockquote>
<p>其他 project 属性、方法参考<a href="https://docs.gradle.org/6.0.1/dsl/org.gradle.api.Project.html#N15127" target="_blank" rel="noopener noreferrer">官方 API 文档<ExternalLinkIcon/></a></p>
</blockquote>
<h1 id="依赖规则" tabindex="-1"><a class="header-anchor" href="#依赖规则" aria-hidden="true">#</a> 依赖规则</h1>
<p>大部分项目都是由诸多第三方依赖组成的. 在 Gradle 中, 依赖不是独立存在的. 每个依赖都会归属于一个 Configuration. 它们的关系如下:</p>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/12/30/16f551f99c602289~tplv-t2oaga2asx-watermark.awebp" alt=""></p>
<p>每个 Project 可以有多个 Configuration. 我们可以通过 configurations 引用到当前项目的所有的 configuration.</p>
<p>每个 Configuration 实际上是 dependency 的集合, 便于不同构建步骤引用依赖</p>
<h2 id="常见-configuration" tabindex="-1"><a class="header-anchor" href="#常见-configuration" aria-hidden="true">#</a> 常见 Configuration</h2>
<ul>
<li>implementation 依赖会出现在编译产物中. 但是最终产物中的该依赖不会向外暴露接口. 这- 种方式可以有效减少 recompile 时所需要编译的模块, 提高编译速度.</li>
<li>api 同上, 但是在编译期会传递依赖给外部.</li>
<li>compileOnly 仅编译期有效, 不会出现在最终产物中</li>
<li>runtimeOnly 仅运行期有效, 会出现在编译产物中</li>
<li>annotationProcessor 注解处理器依赖(包含 META-INF/services/javax.- annotation.processing.Processor 的 jar 包)</li>
</ul>
<h2 id="configuration-继承" tabindex="-1"><a class="header-anchor" href="#configuration-继承" aria-hidden="true">#</a> Configuration 继承</h2>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code>dependencies <span class="token punctuation">{</span>
    testCompile 'com<span class="token punctuation">.</span>squareup<span class="token punctuation">.</span>assertj<span class="token operator">:</span>assertj<span class="token operator">-</span>android<span class="token operator">:</span><span class="token number">1.1</span><span class="token punctuation">.</span><span class="token number">1</span>'
    testCompile 'junit<span class="token operator">:</span>junit<span class="token operator">:</span><span class="token number">4.12</span>'
    androidTestCompile 'com<span class="token punctuation">.</span>squareup<span class="token punctuation">.</span>assertj<span class="token operator">:</span>assertj<span class="token operator">-</span>android<span class="token operator">:</span><span class="token number">1.1</span><span class="token punctuation">.</span><span class="token number">1</span>'
    androidTestCompile 'junit<span class="token operator">:</span>junit<span class="token operator">:</span><span class="token number">4.12</span>'
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>上例中 testCompile 与 androidTestCompile 共同的依赖被书写了两次,这时就可以通过定义一个公共的 configuration, 同时让 testCompile 和 androidTestCompile 继承与这个公共依赖即可</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code>configurations <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>androidTestCompile<span class="token punctuation">,</span> testCompile<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">each</span> <span class="token punctuation">{</span> it<span class="token punctuation">.</span>extendsFrom commonTestCompile <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

dependencies <span class="token punctuation">{</span>
    commonTestCompile 'com<span class="token punctuation">.</span>squareup<span class="token punctuation">.</span>assertj<span class="token operator">:</span>assertj<span class="token operator">-</span>android<span class="token operator">:</span><span class="token number">1.1</span><span class="token punctuation">.</span><span class="token number">1</span>'
    commonTestCompile 'junit<span class="token operator">:</span>junit<span class="token operator">:</span><span class="token number">4.12</span>'
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="常见依赖问题" tabindex="-1"><a class="header-anchor" href="#常见依赖问题" aria-hidden="true">#</a> 常见依赖问题</h2>
<p>依赖决议是指 &quot;在编译过程中, 如果存在某个依赖的多个版本, 构建系统应该选择哪个进行构建的问题&quot;. 无论是新手还是老手, 编译失败大部分情况都是由决议错误导致的.</p>
<ul>
<li>debugCompileClasspath / releaseCompileClasspath</li>
</ul>
<p>编译期发生 'xxx Not Found', 本质就是在这个 configuration 中没有对应的代码.
通常是由于没有依赖正确的库导致的. 排查</p>
<ul>
<li>debugRuntimeClasspath / releaseRuntimeClasspath</li>
</ul>
<p>运行期发生 'xxx Not Found', 本质就是在这个 configuration 中没有对应的代码.
通常是由于使用了 compileOnly(xxx) 仅仅在编译期依赖某些库导致.</p>
<h2 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> implementation</h2>
<h3 id="isforce" tabindex="-1"><a class="header-anchor" href="#isforce" aria-hidden="true">#</a> isForce</h3>
<p>决议冲突时是否强制使用当前版本, boolean，只影响当前模块</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code>dependencies <span class="token punctuation">{</span>
    <span class="token function">implementation</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"io.reactivex.rxjava2:rxjava:2.2.6"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        isForce <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token function">implementation</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"io.reactivex.rxjava2:rxjava:2.2.10"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        isForce <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="exclude" tabindex="-1"><a class="header-anchor" href="#exclude" aria-hidden="true">#</a> exclude</h2>
<p>用于排除某个或者某组传递依赖:直接写在 dependencies 代码块中的依赖叫做 直接依赖. 而通过某个依赖从而间接引入的其它依赖项叫做 间接依赖 或 传递依赖. Gradle 中提供了排除间接依赖的方式</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token function">implementation</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"io.reactivex.rxjava2:rxandroid:2.1.1"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token function">exclude</span><span class="token punctuation">(</span>group <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"io.reactivex.rxjava2"</span></span><span class="token punctuation">,</span> module <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"rxjava"</span></span><span class="token punctuation">)</span>

    <span class="token function">exclude</span><span class="token punctuation">(</span>group <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"io.reactivex.rxjava2"</span></span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="多项目共享依赖版本" tabindex="-1"><a class="header-anchor" href="#多项目共享依赖版本" aria-hidden="true">#</a> 多项目共享依赖版本</h2>
<p><a href="https://docs.gradle.org/6.0.1/userguide/dependency_management_terminology.html#sub::terminology_platform" target="_blank" rel="noopener noreferrer">platform<ExternalLinkIcon/></a> + constraint 实现在所有子项目共享版本. 如下:</p>
<ol>
<li>创建一个子项目, 比如叫做 bom, 专门用于管理版本</li>
</ol>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token comment">// bom/build.gradle.kts</span>

plugins <span class="token punctuation">{</span>
    `java<span class="token operator">-</span>platform`
<span class="token punctuation">}</span>

dependencies <span class="token punctuation">{</span>
    constraints <span class="token punctuation">{</span>
        <span class="token function">implementation</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"io.reactivex.rxjava2:rxjava:2.2.0"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="2">
<li>在其他子项目中通过 platform 引入 &quot;版本项目&quot; bom</li>
</ol>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code>
<span class="token comment">// foo/build.gradle.kts</span>

dependencies <span class="token punctuation">{</span>
<span class="token function">implementation</span><span class="token punctuation">(</span><span class="token function">platform</span><span class="token punctuation">(</span><span class="token function">project</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">":bom"</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// No version needed</span>
    <span class="token function">implementation</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"io.reactivex.rxjava2:rxjava"</span></span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>只需要 implementation(platform(project(&quot;:bom&quot;))) 即可将 bom 工程所有的依赖约束引入, 方便在子项目中共享</p>
<h2 id="依赖版本号" tabindex="-1"><a class="header-anchor" href="#依赖版本号" aria-hidden="true">#</a> 依赖版本号</h2>
<p>|                 表达式                  |                             描述                             |
| :-------------------------------------: | :----------------------------------------------------------: | ------------------------------------- |
| 1.3, 1.3.0-beta3, 1.0-20150201.131010-1 |                           固定版本                           |
|             [1.0.0, 1.3.0)              | 大于等于 1.0.0 且小于 1.3.0 的版本. 其中 ')' 可以使用 '[' 代 | 替, 例如: '[1.0.0, 1.3.0[' 6.0.1 新增 |
|               1.+, [1.0,)               |                     大于等于 1.0 的版本                      |
|   latest.integration, latest.release    |                           最新版本                           |</p>
<h2 id="依赖版本力度" tabindex="-1"><a class="header-anchor" href="#依赖版本力度" aria-hidden="true">#</a> 依赖版本力度</h2>
<p>控制依赖的依赖，required、strictly、prefer 和 reject，<a href="https://juejin.cn/book/6844733819363262472/section/6844733819426209799" target="_blank" rel="noopener noreferrer">见<ExternalLinkIcon/></a></p>
<h2 id="依赖查找-分析" tabindex="-1"><a class="header-anchor" href="#依赖查找-分析" aria-hidden="true">#</a> 依赖查找&amp;分析</h2>
<p>依赖的传递特性导致项目中所依赖的版本实际上是 决议 的结果. 当项目变大或者引入大量三方依赖后, 很难了解当前项目中所有的依赖关系以及对应的版本. 这时就需要通过依赖分析.</p>
<ol>
<li><a href="https://docs.gradle.org/6.0.1/userguide/viewing_debugging_dependencies.html#sec:listing_dependencies" target="_blank" rel="noopener noreferrer">使用 dependencies 任务分析依赖<ExternalLinkIcon/></a></li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./gradlew :app:dependencies
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>一般无需打印所有 configuration，可用参数控制输出</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./gradlew :app:dependencies --configuration compileClasspath
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li><a href="https://docs.gradle.org/6.0.1/userguide/viewing_debugging_dependencies.html#sec:debugging-build-scans" target="_blank" rel="noopener noreferrer">使用 build scan 分析<ExternalLinkIcon/></a></li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./gradlew build --scan
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3">
<li>依赖查找</li>
</ol>
<p>当我们想着重分析某一个依赖时, 可以通过 dependencyInsight 任务, 从被依赖的目标反向查找依赖关系. 例如:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./gradlew :app:dependencyInsight --configuration debugCompileClasspath --dependency kotlin-stdlib
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="android-构建详解" tabindex="-1"><a class="header-anchor" href="#android-构建详解" aria-hidden="true">#</a> <a href="https://juejin.cn/book/6844733819363262472/section/6844733819430371341#:~:text=Android%20%E6%9E%84%E5%BB%BA-,%E8%AF%A6,-%E8%A7%A3" target="_blank" rel="noopener noreferrer">Android 构建详解<ExternalLinkIcon/></a></h1>
<ul>
<li>如何查找 Gradle API</li>
<li>插件：某种类型（语言、工程等）的编译的模板</li>
</ul>
<h2 id="子模块" tabindex="-1"><a class="header-anchor" href="#子模块" aria-hidden="true">#</a> 子模块</h2>
<p>apply plugin: ... 即是应用插件的地方. 一般 android 无非就是 com.android.application 或者 com.android.library. 两者都会引入 android {...}</p>
<p>代码、资源配置流程
<img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/30/16e1c9fc466a804f~tplv-t2oaga2asx-watermark.awebp" alt=""></p>
<h2 id="代码相关配置" tabindex="-1"><a class="header-anchor" href="#代码相关配置" aria-hidden="true">#</a> 代码相关配置</h2>
<h3 id="源码、资源目录配置" tabindex="-1"><a class="header-anchor" href="#源码、资源目录配置" aria-hidden="true">#</a> 源码、资源目录配置</h3>
<p>无论是源码还是资源文件, 都通过 sourceSets {...} 进行配置</p>
<p><a href="https://developer.android.google.cn/reference/tools/gradle-api/7.0/com/android/build/api/dsl/AndroidSourceSet" target="_blank" rel="noopener noreferrer">sourceSet<ExternalLinkIcon/></a></p>
<h2 id="资源构建" tabindex="-1"><a class="header-anchor" href="#资源构建" aria-hidden="true">#</a> 资源构建</h2>
<p>资源也分为两大类：</p>
<ol>
<li>需要特殊处理</li>
</ol>
<p>src/main/res 所有资源都会经过 Android Asset Packaging Tool(简称 aapt)&quot;编译&quot;， 但是不同类型的资源会以不同的方式被处理. 例如图片资源, 会被压缩后放入 APK, 而布局的 layout 文件, 则会从 xml 格式被编译为二进制格式存储。</p>
<p>aapt2 除了会优化存储空间和运行时解析资源的效率外, 还有一个重要的目的就是生成 R 文件.</p>
<ol start="2">
<li>无需特殊处理</li>
</ol>
<p>例如, app/src/main/assets 目录下的资源, 以及 app/libs 下的 so 文件.</p>
<h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3>
<p><a href="https://developer.android.google.cn/reference/tools/gradle-api/7.0/com/android/build/api/dsl/AaptOptions" target="_blank" rel="noopener noreferrer">aaptOptions<ExternalLinkIcon/></a>设置执行 aapt 的参数</p>
<p><a href="https://developer.android.google.cn/reference/tools/gradle-api/7.0/com/android/build/api/dsl/PackagingOptions" target="_blank" rel="noopener noreferrer">packagingOptions<ExternalLinkIcon/></a>处理重复资源</p>
<h2 id="默认配置" tabindex="-1"><a class="header-anchor" href="#默认配置" aria-hidden="true">#</a> 默认配置</h2>
<p><a href="https://developer.android.google.cn/reference/tools/gradle-api/7.0/com/android/build/api/dsl/DefaultConfig" target="_blank" rel="noopener noreferrer">defaultConfig<ExternalLinkIcon/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>android {
    ....

    defaultConfig {
        applicationId = "com.walfud.myapplication"
        applicationIdSuffix = "namesuffix"

        versionCode = 1
        versionName = "1.0.0"
        versionNameSuffix = "alpha"

        manifestPlaceholders = mapOf("hostName" to "www.example.com")
    }

    ....
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>buildConfigField 方法会在生成 BuildConfig.java 时, 向其中插入属性</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token comment">// build.gradle.kts</span>
android <span class="token punctuation">{</span>
    <span class="token operator">..</span><span class="token operator">..</span>

    defaultConfig <span class="token punctuation">{</span>
        <span class="token function">buildConfigField</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"int"</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">"i"</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">"1234"</span></span><span class="token punctuation">)</span>
        <span class="token function">buildConfigField</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"String"</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">"str"</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">"\"some text\""</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token operator">..</span><span class="token operator">..</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// BuildConfig.java</span>

<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">BuildConfig</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token comment">// Fields from default config.</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1234</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">"some text"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h1 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h1>
<ul>
<li>Gradle 官方文档：https://docs.gradle.org/current/userguide/userguide.html</li>
<li>android gradle 配置： https://developer.android.google.cn/reference/tools/gradle-api/7.0/classes</li>
<li>kotlin gradle 文档： https://book.kotlincn.net/text/mpp-dsl-reference.html</li>
</ul>
<h1 id="随记" tabindex="-1"><a class="header-anchor" href="#随记" aria-hidden="true">#</a> 随记</h1>
<ul>
<li>官网查看 api</li>
<li>scan 查看项目依赖情况</li>
</ul>
</template>

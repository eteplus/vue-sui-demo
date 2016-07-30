# vue-sui-demo
> 线上访问地址 http://eteplus.github.io/vue-sui-demo

> 如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

> 对于那些发邮件给我的同学说声抱歉, 由于本人的邮箱忘记密码了，最近才找回, 如果遇到什么问题的，欢迎一起交流和学习！（2016-07-11）

---
Vue很轻量，易定制，比较适合移动端，很喜欢Vue写组件的方式，
所有用[VUE](http://cn.vuejs.org/) 和 [SUI-Mobile](http://m.sui.taobao.org/) 写了一个移动端demo，用来反馈vue的学习成果（禁用了SUI自带的路由，使用[Vue-router](https://github.com/vuejs/vue-router)）

##### 环境
 1. node v5.12.0
 2. cnpm 4.2.0
 3. npm 3.3.9

##### 技术栈

> [vue](https://github.com/vuejs/vue)

> [vue-router](https://github.com/vuejs/vue-router)

> [vue-resource](https://github.com/vuejs/vue-resource)

> [webpack](http://webpack.github.io/docs/)

> [sui-mobile](http://m.sui.taobao.org/)

> [es6-babel](https://babeljs.io/docs/learn-es2015/)

---
### 截图

---

![print](./src/assets/img/print.png)

---

### 安装
项目地址：（使用`git clone`）

```shell
git clone https://github.com/eteplus/vue-sui-demo.git
```

通过`npm`安装本地服务第三方依赖模块(需要已安装[Node.js](https://nodejs.org/))，使用npm安装依赖模块可能会很慢，建议换成[cnpm](http://cnpmjs.org/)

```shell
npm install -g cnpm --registry=http://registry.npm.taobao.org
```

```bash
# 安装依赖模块
cnpm install

# 启动服务
npm run dev

# 发布代码
npm run build

```

### 开发

### 目录结构
<pre>
.
├── README.md           
├── dist                     // 项目build目录
├── config                   // 环境变量和入口，出口配置
├── static                   // 静态资源目录
├── build                    // 项目的配置文件目录
│   ├── dev-server.js        // 开发的服务配置
│   ├── webpack-dev-conf.js  // 开发的Webpack 配置文件
│   ├── webpack-prod-conf.js // 生产的Webpack 配置文件
│   ├── webpack-base-conf.js // 基本的Webpack 配置文件
├── package.json             // 项目配置文件
├── src                      // 生产目录
│   ├── assets               // css js 和图片资源
│   ├── data                 // 数据文件
│   ├── components           // 各种组件
│   ├── views                // 各种页面
│   ├── directives           // 各种指令
│   ├── filters.js           // 各种过滤器
│   ├── router.js            // 路由配置
│   └── main.vue             // 根组件
│   └── app.js               // Webpack 预编译入口         
├── index.html               // 项目入口文件
.
</pre>

### 更新记录
参看 [CHANGELOG.md](./CHANGELOG.md)

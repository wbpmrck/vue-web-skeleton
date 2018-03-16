# 使用说明

本项目是一个`纯净版` web前端工程脚手架，基于`webpack` 和 `vue` 。

本项目模板根据[vue官方脚手架](https://vuejs-templates.github.io/webpack/)优化而来，主要有以下特点：

- 相对纯净
  - 目前内置了`vue-router`,除此之外没有其他第三方库.
- 支持多个入口
  - 静态类型入口：可以参考`front-end/entry-page/after-sale/after-sale.html`
  - vue框架SPA页面入口：可以参考`front-end/entry-page/index/index.html`
- 入口配置自动生成
  - entry配置、HtmlWebpackPlugin配置完全自动生成

# 目录规范与约定

## /build

构建相关脚本

## /config

配置文件目录

## /dist

构建输出目录

## /entry-page

这是所有`入口页面`的目录，所有入口文件必须遵守以下规范：

- 一个文件夹代表一个`入口页面`，比如`A`
- `入口页面`的模板(template) 必须以`入口名.html`命名，比如A.html,放在入口页面文件夹内
- `入口页面`的代码块入口(chunk) 必须以`入口名.js`命名，比如A.js,放在入口页面文件夹内

> 注意，构建脚本会自动扫描本目录并自动生成entry配置，所以如果不遵守规范，构建将出错

## /node_modules

依赖的从`npm`下载的第三方库所在目录。

## /src/app

对于单页应用(SPA),用于存放最底部(root)的vue对象.通常是使用了 `router-view` 的那个

对于不使用vue的入口页面，这个目录可以无需关注

## /src/assets

所有本工程相关的静态资源所在目录,他下面包含几个子目录，分别存放不同类型的素材

## /src/component

所有本工程使用的`组件`目录。关于`组件`、`视图`、`应用` 的区别，参考 [概念说明](./#concept)

## /src/lib

本工程使用的通用库(可跨项目复用的)目录。和`node_modules`不同，这里的库可能没有被`npm`管理

## /src/router

对单页应用有用，用于存放路由文件。

## /src/service

存放前端与server的数据接口部分。以及可复用的业务逻辑部分。

## /src/view

对单页应用有用，所有`视图`应该存放在这里，一个文件夹代表一个`视图`

## /static

> 这个目录是vue脚手架工具里推荐的，但是实际用处不大，后续可能删掉，一般不建议使用

纯静态文件目录，这个文件目录里的资源不会被webpack处理，所以：

- webpack无法对他进行md5加戳、追踪url变化等处理
- 会被直接copy到dist/static目录

## /.babelrc

babel配置文件

## /.eslintrc.js

eslint配置文件

## /.postcssrc.js

postcss配置文件

<a name="concept">

# 概念说明

## app
## view
## component

# todo
- 使用commonChunks抽取通用模块

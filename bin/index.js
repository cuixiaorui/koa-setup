#!/usr/bin/env node

console.log("hello koa-setup");

// 1. 在当前目录下创建文件夹
// 2. 安装插件 - koa koa-router koa-static koa-views
//    1. 可交互选择安装
// 3. index.js 这个文件的模板
//    1. 需要基于安装的插件动态生成

// 实现
// 1. 基于要安装的插件生成 index.js 模板文件
// 2. 最后在统一安装所有插件
const ejs = require("ejs");
const fs = require("fs");
const indexTemplate = fs.readFileSync(__dirname + "/template/index.ejs");
const getOptions = require("./options");

(async () => {
  let options = await getOptions();
  options = handleOptions(options);
  let indexCode = ejs.render(indexTemplate.toString(), options);
  // 基于配置生成对应的中间件对象
  // 获取要安装的插件数据
  // 还需要收集要创建的文件
  // 1. code  -> index.js
  // 2. 创建 static
  // 3. 创建 views
  const needInstallMiddlewares = [];
  const needCreateFileDatas = [];
  if (options.middleware.koaRouter) {
    needInstallMiddlewares.push("koa-router");
  }

  if (options.middleware.koaServe) {
    needInstallMiddlewares.push("koa-static");
    needCreateFileDatas.push({
      type: "folder",
      name: "static",
    });
  }

  if (options.middleware.koaViews) {
    needInstallMiddlewares.push("koa-views");
    needCreateFileDatas.push({
      type: "folder",
      name: "views",
    });
  }

  if (options.middleware.koaBody) {
    needInstallMiddlewares.push("koa-body");
  }

  console.log(needInstallMiddlewares)
  console.log(needCreateFileDatas)


})();

function handleOptions(options) {
  let result = Object.assign({}, options);
  result.middleware = options.middleware.reduce((result, val) => {
    result[val] = true;
    return result;
  }, {});
  return result;
}

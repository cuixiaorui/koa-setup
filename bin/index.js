#!/usr/bin/env node

// 1. 在当前目录下创建文件夹
// 2. 安装插件 - koa koa-router koa-static koa-views
//    1. 可交互选择安装
// 3. index.js 这个文件的模板
//    1. 需要基于安装的插件动态生成
const ejs = require("ejs");
const fs = require("fs-extra");
const getOptions = require("./options");
const path = require("path");
const MiddlewareTask = require("./middleware-task");
const { FileTask, FolderTask, CommandTask, TaskManager } = require("./task");
let options;

(async () => {
  options = await getOptions();

  const taskManager = new TaskManager();
  // 创建项目文件夹
  taskManager.add(createPackageTask());

  // 创建入口文件 index.js
  let entryPointCode = createEntryPointCode();
  taskManager.add(createEntryPointFileTask(entryPointCode));

  // 创建 npm package.json
  taskManager.add(initNpmTask());

  // 添加中间件的任务
  taskManager.add(MiddlewareTask(options.middleware, getRoot()));

  taskManager.execute();
})();

function getRoot() {
  return path.resolve(process.cwd(), options.packageName);
}

function createPackageTask() {
  return new FolderTask({
    name: "create package folder",
    path: getRoot(),
  });
}

function initNpmTask() {
  return new CommandTask({ command: `cd ${getRoot()} && npm init -y` });
}

function createEntryPointFileTask(entryPointCode) {
  return new FileTask({
    name: "create entry point index.js",
    content: entryPointCode,
    filename: "index.js",
    path: getRoot(),
  });
}

function createEntryPointCode() {
  const indexTemplate = fs.readFileSync(__dirname + "/template/index.ejs");
  return ejs.render(indexTemplate.toString(), options);
}

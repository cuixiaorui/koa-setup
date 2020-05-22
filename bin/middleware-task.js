const FolderTask = require("./task/FolderTask");
const CommandTask = require("./task/CommandTask");

module.exports = (middlewareList, root) => {
  const map = getMiddlewareTaskMap(root);
  return middlewareList.reduce((result, name) => {
    const tasks = map[name];
    result.push(...tasks);
    return result;
  }, []);
};

function getMiddlewareTaskMap(root) {
  const createInstallCommandTask = (command) => {
    const cdToRootPathCommand = `cd ${root}`;
    return new CommandTask({
      name: command,
      command: `${cdToRootPathCommand} && ${command}`,
    });
  };

  return {
    koaStatic: [
      new FolderTask({
        path: root,
        filename: "static",
        name: "create static folder",
      }),
      createInstallCommandTask("npm i koa-static"),
    ],
    koaViews: [
      new FolderTask({
        path: root,
        filename: "views",
        name: "create views folder",
      }),
      createInstallCommandTask("npm i koa-views pug"),
    ],
    koaRouter: [createInstallCommandTask("npm i koa-router")],

    koaBody: [createInstallCommandTask("npm i koa-body")],
  };
}

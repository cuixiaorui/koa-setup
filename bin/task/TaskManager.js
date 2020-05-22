const { FileTask, FolderTask, CommandTask } = require("./index");
const chalk = require("chalk");
const log = console.log;
module.exports = class TaskManager {
  constructor() {
    this.taskList = [];
  }

  add(task) {
    if (Array.isArray(task)) {
      this.taskList.push(...task);
    } else {
      this.taskList.push(task);
    }
  }

  size() {
    return this.taskList.length;
  }

  getTasksByType(type) {
    return this.taskList.filter((task) => {
      return task.getType() === type;
    });
  }

  async execute() {
    // 执行命令需要有前后顺序
    // 先执行所有创建文件夹的task
    await this.executeTaskByType(FolderTask.type);

    // 在执行所有文件的task
    await this.executeTaskByType(FileTask.type);

    //执行所有的 command task
    await this.executeTaskByType(CommandTask.type);
    
    // 安装结束
    log(chalk.hex("#DEADED").bold("setup success ~~~"));
    log(chalk.hex("#7FFF00").bold("happy every day -_-#"));
  }

  async executeTaskByType(commandType) {
    const commandTasks = this.getTasksByType(commandType);
    for (const task of commandTasks) {
      log(chalk.blue("当前执行的任务：") + chalk.red(task.name));
      await task.execute();
    }
  }
};

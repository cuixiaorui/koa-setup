const {FileTask,FolderTask,CommandTask} = require('./index');
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
  }

  async executeTaskByType(commandType) {
    const commandTasks = this.getTasksByType(commandType);
    for (const task of commandTasks) {
      await task.execute();
    }
  }
};

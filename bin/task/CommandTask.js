const BaseTask = require("./BaseTask");
const exec = require("../utils/exec");

module.exports = class CommandTask extends BaseTask {
  static type = "command";
  constructor({ command }) {
    super(CommandTask.type);
    this.command = command;
  }

  execute() {
    console.log(this.command);
    return exec(this.command);
  }
};

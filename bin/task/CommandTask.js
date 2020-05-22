const BaseTask = require("./BaseTask");
const exec = require("../utils/exec");

module.exports = class CommandTask extends BaseTask {
  static type = "command";
  constructor({ command, name }) {
    super(CommandTask.type, name);
    this.command = command;
  }

  execute() {
    return exec(this.command);
  }
};

const fs = require("fs-extra");
const path = require("path");
const BaseTask = require("./BaseTask");

module.exports = class FileTask extends BaseTask {
  static type = "file";
  constructor({ path, filename, content, name }) {
    super(FileTask.type, name);
    this.path = path;
    this.filename = filename;
    this.content = content;
  }

  getFullPath() {
    return path.resolve(this.path, this.filename);
  }

  execute() {
    return fs.outputFile(this.getFullPath(), this.content);
  }
};

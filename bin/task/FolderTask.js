const fs = require("fs-extra");
const path = require("path");
const BaseTask = require("./BaseTask");
module.exports = class FolderTask extends BaseTask {
  static type = "folder";
  constructor({ path, filename = "",name }) {
    super(FolderTask.type,name);
    this.path = path;
    this.filename = filename;
  }

  getFullPath() {
    return path.resolve(this.path, this.filename);
  }

  execute() {
    return fs.ensureDir(this.getFullPath());
  }
};

module.exports = class BaseTask {
  constructor(type, name = "") {
    this.name = name;
    this.type = type;
  }

  getType() {
    return this.type;
  }

  getName() {
    return this.name;
  }
};

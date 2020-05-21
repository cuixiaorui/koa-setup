var inquirer = require("inquirer");
const defaultOptions = require("./default-options");
const packageName = require("./questions/package-name");
const port = require("./questions/port");
const selectMiddleware = require("./questions/select-middleware");

module.exports = async () => {
  const answers = await inquirer.prompt([
    packageName(),
    port(defaultOptions),
    selectMiddleware(),
  ]);
  return answers;
};

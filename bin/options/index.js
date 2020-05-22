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

  return handleOptions(answers);
};

function handleOptions(options) {
  let result = Object.assign({}, options);
  result.middlewareMap = options.middleware.reduce((result, val) => {
    result[val] = true;
    return result;
  }, {});
  return result;
}

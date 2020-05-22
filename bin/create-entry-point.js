const ejs = require("ejs");
const fs = require("fs-extra");
var remark = require("remark");
var recommended = require("remark-preset-lint-recommended");
var lint = require('remark-lint');

module.exports = function createEntryPointCode(options) {
  const templateCode = fs.readFileSync(__dirname + "/template/index.ejs");

  const processedCode = ejs.render(templateCode.toString(), options);
  return new Promise((resolve, reject) => {
      resolve(processedCode)
  })

// todo 格式化生成代码
//   return new Promise((resolve, reject) => {
//     remark()
//       .use(lint)
//       .process(processedCode, function (err, file) {
//         if (err) {
//           reject(err);
//           return;
//         }
//         resolve(String(file));
//       });
//   });
};

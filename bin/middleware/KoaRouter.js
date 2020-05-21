const { exec } = require("child_process");
module.exports = class KoaRouter {
  constructor() {}

  execute() {
    exec("npm i koa-router",(err,stdout,stderr)=>{
        if(err){
            throw err;
        }
        console.log(stdout)
        console.log(stderr)
    });
  }
};

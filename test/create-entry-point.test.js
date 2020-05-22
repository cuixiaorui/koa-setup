const createEntryPoint = require("../bin/create-entry-point");
describe("create-entry-point.test.js", () => {
  it("description", async () => {
    // todo options
    const options = {
      packageName: "demo6234234",
      port: "8080",
      middleware: ["koaRouter", "koaStatic", "koaViews", "koaBody"],
      middlewareMap: {
        koaRouter: true,
        koaStatic: true,
        koaViews: true,
        koaBody: true,
      },
    };
    const code = await createEntryPoint(options);
    //     const expectation = `'const Koa = require("koa")\n' +
    //     '\n' +
    //     'const Router = require("koa-router")\n' +
    //     '\n' +
    //     'const serve = require("koa-static")\n' +
    //     '\n' +
    //     'const views = require("koa-views")\n' +
    //     '\n' +
    //     'const views = require("koa-body")\n' +
    //     '\n' +
    //     'const app = new Koa()\n' +
    //     '\n' +
    //     'app.use(serve(\\_\\_dirname+"/static"))\n' +
    //     '\n' +
    //     'app.use(views(\\_\\_dirname+"/views",{\n' +
    //     '    extension: "pug"\n' +
    //     '}))\n' +
    //     '\n' +
    //     'app.use(koaBody({\n' +
    //     '    multipart:true\n' +
    //     '}))\n' +
    //     '\n' +
    //     'const router = new Router()\n' +
    //     'router.get("/",(ctx)=>{\n' +
    //     '    ctx.body = "hello demo6234234"\n' +
    //     '})\n' +
    //     'app.use(router.routes())\n' +
    //     '\n' +
    //     'app.listen(8080)\n'
    // }`
    console.log(code)
    // expect(expectation).toBe(code)
  });
});

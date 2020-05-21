jest.mock("child_process", () => {
  return {
    exec: jest.fn((command, callback) => {
      callback();
    }),
  };
});


const KoaRouter = require('../bin/middleware/KoaRouter');
const {exec} = require('child_process');

describe("KoaRouter", () => {
  it("should installed dependency when invoke execute function", () => {
    const koaRouter = new KoaRouter();
    koaRouter.execute();
    expect(exec).toHaveBeenCalledWith("npm i koa-router",expect.anything())
  });
});

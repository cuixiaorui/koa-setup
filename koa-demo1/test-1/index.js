const Koa = require("koa")

const Router = require("koa-router")


const serve = require("koa-static")





const app = new Koa()


app.use(serve(__dirname+"/static"))







const router = new Router()
router.get("/",(ctx)=>{
    ctx.body = "hello test-1"
})
app.use(router.routes())


app.listen(8080,()=>{
    console.log("open server localhost:8080")
})

const koa = require('koa')
const Router = require('koa-router')

const cors = require('@koa/cors')
const koaBody = require('koa-body')


const app = new koa()
const router = new Router()


app.use(koaBody())
app.use(cors())
router.get('/', ctx => {
  console.log(ctx);
  console.log(ctx.request);
  ctx.body = 'hello world !!'
})

app.use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)
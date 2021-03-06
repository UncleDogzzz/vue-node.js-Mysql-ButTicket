const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const login=require('./routes/login')
const index = require('./routes/index')
const users = require('./routes/users')
const cinemas=require('./routes/cinemas.js')
const role=require('./routes/role.js')
const cors=require("koa-cors")             //跨域
app.use(cors(
  {
	  'Access-Control-Allow-Methods':['GET', 'PUT', 'POST']
  }
))
// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  // extension: 'nunjucks'
  map:{html:'nunjucks'}
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(login.routes(), login.allowedMethods())
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(cinemas.routes(), login.allowedMethods())
app.use(role.routes(), role.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app

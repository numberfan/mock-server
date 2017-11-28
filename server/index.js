/**
 * @author: shirychen (shirychen9@163.com)
 * @date: 2017/11/23
 */
const config = require('./config')
const jsonServer = require('json-server')
const rules = require('./routes')
const createDatabase = require('./createDatebase')

const ip = config.SERVER
const port = config.PORT
const staticFile = config.STATIC

const server = jsonServer.create()
const router = jsonServer.router(config.DB_FILE)
const middlewares = jsonServer.defaults({
  static: staticFile
})

server.use(jsonServer.bodyParser)
server.use(middlewares)

router.render = (req, res) => {
  res.jsonp({
    code: 0,
    data: res.locals.data
  })
}

// /addData 用于html请求添加api的
server.use('/addData', (req, res, next) => {
  createDatabase('/user/data', 222)
  next()
})
server.use('/api', router)
server.use(jsonServer.rewriter(rules))
server.use(router)

server.listen({
  host: ip,
  port: port
}, function () {
  console.log(JSON.stringify(jsonServer))
  console.log(`JSON Server is running in http://${ip}:${port}`)
})

/**
 * @author: shirychen (shirychen9@163.com)
 * @date: 2017/11/23
 */
const config = require('./config')
const jsonServer = require('json-server')
const rules = require('./config/route-rewrite')
const ip = config.SERVER
const port = config.PORT
const staticFile = config.STATIC

const server = jsonServer.create()
const router = jsonServer.router(config.DB_FILE)
const db = router.db
const middlewares = jsonServer.defaults({
  static: staticFile
})
const useCustomMiddlewares = require('./middlewares/index.js')
server.use(jsonServer.rewriter(rules))
server.use(jsonServer.bodyParser)
server.use(middlewares)
useCustomMiddlewares(server, db)
server.use(router)

router.render = (req, res) => {
  res.jsonp({
    code: 0,
    data: res.locals.data
  })
}

server.listen({
  host: ip,
  port: port
}, function () {
  console.log(JSON.stringify(jsonServer))
  console.log(`JSON Server is running in http://${ip}:${port}`)
})

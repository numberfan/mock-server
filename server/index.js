/**
 * @author: shirychen (shirychen9@163.com)
 * @date: 2017/11/23
 */
// const path = require('path')
const config = require('./config')
const jsonServer = require('json-server')
const rules = require('./routes')
const dbfile = require(config.DB_FILE)
const createDatabase = require('./createDatebase')

const ip = config.SERVER
const port = config.PORT
// const db_file = config.DB_FILE
const staticFile = config.STATIC

const server = jsonServer.create()
const router = jsonServer.router(dbfile())
const middlewares = jsonServer.defaults({
  static: staticFile
})

server.use(jsonServer.bodyParser)
server.use(middlewares)

server.use((req, res, next) => {
  res.header('X-Hello', 'World')
  next()
})

router.render = (req, res) => {
  res.jsonp({
    code: 0,
    data: res.locals.data
  })
}

// /addData 用于html请求添加api的
server.use('/addData', (req, res, next) => {
  console.log('user click the button.')
  /* 动态创建文件 */
  let obj = [
    {name: '张三'},
    {name: '李四'},
    {name: '王五'}
  ]
  createDatabase('/user/data', obj)
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

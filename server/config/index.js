/**
 * @author: shirychen (shirychen9@163.com)
 * @date: 2017/11/27
 */
const path = require('path')
module.exports = {
  SERVER: '127.0.0.1',
  PORT: 8880,
  RULES: 'route-rewrite.json',
  DB_FILE: path.resolve(process.cwd(), './server/db/database.json'),
  STATIC: './src'
}

/**
 * @author: shirychen (shirychen9@163.com)
 * @date: 2017/11/27
 */
const path = require('path')
module.exports = {
  SERVER: '127.0.0.1',
  PORT: 8880,
  RULES: 'route-rewrite.json',
<<<<<<< HEAD:server/config/index.js
  DB_FILE: 'server/db/database.json',
=======
  DB_FILE: path.resolve(process.cwd(), './server/db/database.json'),
>>>>>>> 2ad5eb3b25145922969838042f44fe7a0484f9cd:server/config/index.js
  STATIC: './src'
}

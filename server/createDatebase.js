/**
 * @author: shirychen (shirychen9@163.com)
 * @date: 2017/11/27
 */
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./server/database.json')
const db = low(adapter)

/**
 * 增加数据
 * @param {String} url API url
 * @param {Object} data 增加的数据
 * @returns {boolean}
 */
module.exports = (url, data) => {
  // write api
  db.set('shirychen', ['chenfan'])
    .write()
  return true
}

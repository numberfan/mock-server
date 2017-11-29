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
 * @param {Object} data API结构
 * @returns {boolean}
 */
module.exports = (url, data) => {
  console.log(url)
  console.log(data)
  url = url.substring(1, url.length).replace('/', '_')
  data.name = '3332张三与李四'
  // write api
  db.set(url, data)
    .write()
  console.log('追加数据成功')
  return true
}

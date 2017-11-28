/**
 * @author: shirychen (shirychen9@163.com)
 * @date: 2017/11/27
 */
const path = require('path')
const glob = require('glob')

// 读取js文件
const apiFiles = glob.sync(path.resolve(__dirname, './') + '/database/*.js', {
  nodir: true
})

let data = {}

apiFiles.forEach(item => {
  let apiFile = require(item)
  if (apiFile.url) {
    data[apiFile.url] = apiFile.resp
  }
})

module.exports = data

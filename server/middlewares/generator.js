const Mock = require('mockjs')
const Random = Mock.Random

function dealData (obj) {
  Object.keys(obj).forEach(item => {
    let val = obj[item]
    if (typeof val === 'object') {
      dealData(val)
    } else {
      if (typeof val === 'string') {
        val = val.toLowerCase()
        obj[item] = (val === 'number') ? Random.integer(0, 100) : Random.cparagraph(0, 10).substr(0, 50)
      }
    }
  })

  return obj
}

module.exports = (db) => {
  return (req, res, next) => {
    let url = req.body.url
    let data = req.body.data

    data = JSON.parse(data)
    data = dealData(data)
    url = url.charAt(0) === '/' ? url.substring(1, url.length) : url
    url = url.replace(/\//g, '_')
    // write api
    db.set(url, data)
      .write()
    console.log('追加数据成功')
    res.locals.data = {msg: 'success'}
    next()
  }
}

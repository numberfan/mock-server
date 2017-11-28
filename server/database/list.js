/**
 * @author: shirychen (shirychen9@163.com)
 * @date: 2017/11/23
 */
let faker = require('faker')
let _ = require('lodash')

let result = {
  url: 'a',
  resp: {
    list: []
  }
}

_.times(10, function (n) {
  result.resp.list.push({
    id: n,
    name: faker.name.findName(),
    color: faker.internet.color()
  })
})

module.exports = result
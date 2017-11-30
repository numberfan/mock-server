const generator = require('./generator')
module.exports = (server, db) => {
  server.use('/generator', generator(db))
}

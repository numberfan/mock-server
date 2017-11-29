module.exports = (db) => {
  return (req, res, next) => {
    db.set('user.name', 'ss')
      .write()
    res.locals.data = db.get('user').value()
    next()
  }
}

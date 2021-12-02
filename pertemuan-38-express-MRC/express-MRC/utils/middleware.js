module.exports = {
  mwAllRoutes: (req, res, next) => {
    console.log("ini mw utk semua endpoint")
    next()
  },

  mwUser: (req, res, next) => {
    console.log("ini mw utk user")
    next()
  }
}
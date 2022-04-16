const jwt = require('jsonwebtoken')
const config = require("./config.json")

const auth = (req, res, next) => {
    if (req.path == '/login') {
        next()
        return
    }
    let headers = req.headers.authorization,
        token = null

    if (headers != null) {
        token = headers.split(' ')[1]
    }
    if (token != null) {
        let jwtHeader = {
            algorithm: 'HS256'
        }
        jwt.verify(token, config.secretKey, jwtHeader, (err, decoded) => {
            if (err) {
                res.json({
                    massage: err.message,
                    notLogged: true
                })
            } else {
                req.opts = decoded
                next()
            }
        })
    } else if (token == null) {
        res.json({
            massage: 'unauthorized',
            notLogged: true
        })
    }
}
module.exports = auth
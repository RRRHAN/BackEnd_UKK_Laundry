const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const md5 = require("md5")
const config = require('../config.json')

const user = require("../models/index").user

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.post('/', async(req, res) => {
    const { username, password } = req.body
        // password = md5(password)
    let result = null
    result = await user.findOne({ where: { username, password } })

    if (result) {
        console.log("res", result);
    };
    if (result == null) {
        // username atau password salah
        res.json({
            message: 'invalid username or password',
            logged: false
        })
    } else if (result != null) {
        // berhasil login
        let jwtHeader = {
            algorithm: 'HS256',
            expiresIn: '7d'
        }
        let payload = {
            data: result
        }

        let token = jwt.sign(payload, config.secretKey, jwtHeader)

        res.json({
            data: result,
            logged: true,
            token: token
        })
    }
})


module.exports = app
const express = require("express"),
    app = express(),
    user = require("../models/index").user
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const grabData = require("../grabData")

const attribute = ["nama", "username", "password", "role"]

app.get("/", async(req, res) => {
    user.findAll()
        .then(result => {
            res.json({
                data: result
            })
        }).catch(err => {
            res.json({
                message: err.message
            })
        })
})

app.get("/:id", async(req, res) => {
    const param = {
        id: req.params.id
    }
    user.findOne({ where: param })
        .then(result => {
            res.json({
                data: result
            })
        }).catch(err => {
            res.json({
                message: err.message
            })
        })
})

app.post("/", async(req, res) => {
    const data = grabData(attribute, req.body)
    user.create(data)
        .then(result => {
            res.json({
                data: result,
                message: "data berhasil ditambahkan"
            })
        }).catch(err => {
            res.json({
                message: err.message
            })
        })

})

app.put("/:id", async(req, res) => {
    const param = {
        id: req.params.id
    }
    const data = grabData(attribute, req.body)
    user.update(data, { where: param })
        .then(result => {
            res.json({
                data: result,
                message: "data berhasil diupdate"
            })
        }).catch(err => {
            res.json({
                message: err.message
            })
        })
})

app.delete("/:id", async(req, res) => {
    const param = {
        id: req.params.id
    }
    user.destroy({ where: param })
        .then(result => {
            res.json({
                data: result,
                message: "data berhasil dihapus"
            })
        }).catch(err => {
            res.json({
                message: err.message
            })
        })
})

module.exports = app
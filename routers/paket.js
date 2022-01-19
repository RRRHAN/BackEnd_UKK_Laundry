const express = require("express"),
    app = express(),
    paket = require("../models/index").paket
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", async(req, res) => {
    paket.findAll()
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
    paket.findOne({ where: param })
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
    paket.create(req.body)
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
    barang.update(req.body, { where: param })
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
    barang.destroy({ where: param })
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
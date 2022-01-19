const express = require("express"),
    app = express(),
    transaksi = require("../models/index").transaksi
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", async(req, res) => {
    transaksi.findAll()
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
    transaksi.findOne({ where: param })
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
    transaksi.create(req.body)
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
    transaksi.update(req.body, { where: param })
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
    transaksi.destroy({ where: param })
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
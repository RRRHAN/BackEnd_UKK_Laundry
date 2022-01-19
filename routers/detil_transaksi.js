const express = require("express"),
    app = express(),
    detil_transaksi = require("../models/index").detil_transaksi
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", async(req, res) => {
    detil_transaksi.findAll()
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
    detil_transaksi.findOne({ where: param })
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
    detil_transaksi.create(req.body)
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
    detil_transaksi.update(req.body, { where: param })
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
    detil_transaksi.destroy({ where: param })
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
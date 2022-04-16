const express = require("express"),
	app = express(),
	transaksi = require("../models/index").transaksi
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const grabData = require("../grabData")

const attribute = [
	"id_member",
	"tgl",
	"batas_waktu",
	"tgl_bayar",
	"status",
	"dibayar",
	"id_user",
]

app.get("/", async (req, res) => {
	transaksi
		.findAll()
		.then((result) => {
			res.json({
				data: result,
			})
		})
		.catch((err) => {
			res.json({
				message: err.message,
			})
		})
})

app.get("/:id", async (req, res) => {
	const param = {
		id: req.params.id,
	}
	transaksi
		.findOne({ where: param })
		.then((result) => {
			res.json({
				data: result,
			})
		})
		.catch((err) => {
			res.json({
				message: err.message,
			})
		})
})

app.post("/", async (req, res) => {
	const data = grabData(attribute, req.body)
	data.id_user = req.opts.data.id
	if (!data.tgl) data.tgl = new Date().toISOString()
	if (!data.batas_waktu) {
		let date = new Date()
        date.setDate(date.getDate() + 7)
		data.batas_waktu = date.toISOString()
	}
	transaksi
		.create(data)
		.then((result) => {
			res.json({
				data: result,
				message: "data berhasil ditambahkan",
			})
		})
		.catch((err) => {
			res.json({
				message: err.message,
			})
		})
})

app.put("/:id", async (req, res) => {
	const param = {
		id: req.params.id,
	}
	const data = grabData(attribute, req.body)
	data.id_user = req.opts.data.id
	transaksi
		.update(data, { where: param })
		.then((result) => {
			res.json({
				data: result,
				message: "data berhasil diupdate",
			})
		})
		.catch((err) => {
			res.json({
				message: err.message,
			})
		})
})

app.delete("/:id", async (req, res) => {
	const param = {
		id: req.params.id,
	}
	transaksi
		.destroy({ where: param })
		.then((result) => {
			res.json({
				data: result,
				message: "data berhasil dihapus",
			})
		})
		.catch((err) => {
			res.json({
				message: err.message,
			})
		})
})

module.exports = app

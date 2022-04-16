const express = require("express"),
	app = express(),
	cors = require("cors"),
	auth = require("./auth"),
	port = 6789,
	models = require("./models/index")

app.use(cors())
app.use(auth)

app.listen(port, () => {
	console.log(`Server run on port ${port}`)
})

app.get(`/`, (req, res) => {
	res.send(`Server Running Properly`)
})

app.get("/count", async (req, res) => {
	const cMember = await models.member.count()
	const cUser = await models.user.count()
	const cTransaksi = await models.transaksi.count()
	const cPaket = await models.paket.count()

	res.json({
		cPaket,
		cTransaksi,
		cUser,
		cMember,
	})
})

const paket = require("./routers/paket")
app.use("/paket", paket)

const detil_transaksi = require("./routers/detil_transaksi")
app.use("/detil_transaksi", detil_transaksi)

const member = require("./routers/member")
app.use("/member", member)

const user = require("./routers/user")
app.use("/user", user)

const transaksi = require("./routers/transaksi")
app.use("/transaksi", transaksi)

const login = require("./routers/login")
app.use("/login", login)

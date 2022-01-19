const express = require("express"),
    app = express(),
    cors = require("cors"),
    port = 6789

app.use(cors())

app.listen(port, () => {
    console.log(`Server run on port ${port}`)
})

app.get(`/`, (req, res) => {
    res.send(`Server Running Properly`)
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
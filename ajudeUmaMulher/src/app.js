const express = require("express")
const app = express()
app.use(express.json())

const gruposDeApoioRoutes = require("./Routes/gruposDeApoioRoutes")
app.use("/grupos", gruposDeApoioRoutes)


module.exports = app
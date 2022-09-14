const express = require("express")
const nano = require("nano")("http://user:password@120.0.0.7:5984");
const app = express()
const authRoute = require('./routes/auth')

app.use(express.json())
app.use('/api/auth', authRoute)

app.listen(2400, () => {console.log("Server started: 2400")})
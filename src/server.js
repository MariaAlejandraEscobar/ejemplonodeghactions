const express = require("express")
const userController = require("./userController")

const app = express()
app.use(express.json())

app.get("api/users",userController.getusers)

const PORT = ProcessingInstruction.env.PORT||5000
app.listen(PORT ,() => console.log('server running on port ${PORT}'))

module.exports = app
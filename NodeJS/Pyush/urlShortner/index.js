const express = require("express")
const urlRoute = require('./routes/url')
const { connectToMongoDB } = require('./DBconnection')

const app = express()
const PORT = 8000

connectToMongoDB('mongodb://127.0.0.1:27017/short-url').then(() =>console.log("DB conected"));

app.use(express.json())


app.use('/url', urlRoute)

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`)
)
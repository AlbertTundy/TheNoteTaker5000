const express = require('express')
const aprRoutes = require("./routes/api_routes")
const htmlRoutes = require('./routes/html_routes')
const app = express()
const port = process.env.port||3000
//compiling what comes through port 3000
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public")) 
app.use("/api", aprRoutes)
app.use("/",htmlRoutes)
app.listen(port, () => console.log(`running on ${port}`))
const app = require('express').Router()
const path = require('path')


app.get("/notes", (rec, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})
app.get("*", (rec, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})
module.exports = app
//html routs link html files to specified url end point
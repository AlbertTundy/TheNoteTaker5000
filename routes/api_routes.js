const fs = require('fs')
const { receiveMessageOnPort } = require('worker_threads')
const express = require('express').Router()
const db = require("../db/db.json")
const app = require('./html_routes')

express.get("/notes",(req, res) => {
    let db = JSON.parse(fs.readFileSync("./db/db.json"))
    res.json(db)
})
express.post("/notes", (req, res) => {
    let newNoteContent = {
        title: req.body.title,
        text: req.body.text,
        id: Math.random()*500
    }
    db.push(newNoteContent)
    fs.writeFileSync("./db/db.json", JSON.stringify(db))
    res.json(db)
})




module.exports = express
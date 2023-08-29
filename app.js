const express = require("express")
const app = express()

const mountains = ["Mount Kilimanjaro", "Denali", "Mount Logan", "Aconcagua", "Mount Everest"]

app.get("/mountains", (req, res) => {
    res.send({mountains})
})

app.get("/mountains/:id", (req, res) => {
    const id = req.params.id - 1
    const mountain = mountains[id]
    res.send({mountain})
})

app.listen(8080)
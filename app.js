const express = require("express")

const app = express()

const mountains = [
    { id: 1, name: "Kangchenjunga", height: 8586 },
    { id: 2, name: "K2", height: 8611 },
    { id: 3, name: "Lhotse", height: 8516 },
    { id: 4, name: "Manaslu", height: 8163 },
    { id: 5, name: "Makalu", height: 8485 },
    { id: 6, name: "Dhaulagiri", height: 8167 },
    { id: 7, name: "Annapurna", height: 8091 },
    { id: 8, name: "Nanga Parbat", height: 8126 },
    { id: 9, name: "Cho Oyu", height: 8188 },
    { id: 10, name: "Mount Everest", height: 8848 }
]

app.get("/mountains", (req, res) => {
    const allMountains = mountains.map(mountain => ({
        id: mountain.id,
        name: mountain.name,
        height: mountain.height
    }))
    
    res.send(allMountains)
})

app.get("/mountains/:id", (req, res) => {
    const {id} = req.params
    const mountainById = mountains[id - 1]

    res.send(mountainById)
})

app.listen(8080)
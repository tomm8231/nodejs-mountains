const express = require("express")

const app = express()

app.use(express.json())

let count = 10

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
    res.send({ data: mountains })
})

app.get("/mountains/:id", (req, res) => {
    const pathVariableMountainId = Number(req.params.id)
    const mountainFound = mountains.find((mountain) => mountain.id === pathVariableMountainId)


    if (!pathVariableMountainId || pathVariableMountainId < 1) {
        res.send({ error: "Mountain id must be a number above 0" })

    } else if (!mountainFound) {
        res.send({ error: "No mountain found with that ID" })

    } else {
        res.send({ data: mountainFound })
    }
})


app.post("/mountains", (req, res) => {
    const newMountain = {
        "id": count + 1,
        "name": req.body.name,
        "height": req.body.height
    }

    count++

    mountains.push(newMountain)
    res.send({ data: newMountain })
})

app.delete("/mountains/:id", (req, res) => {
    const pathVariableMountainId = Number(req.params.id)
    const mountainFound = mountains.find((mountain) => mountain.id === pathVariableMountainId)

    if (!pathVariableMountainId || pathVariableMountainId < 1) {
        res.send({ error: "Mountain ID must be a number above 0" })

    } else if (!mountainFound) {
        res.send({ error: "No mountain found with that ID" })

    } else {
        const index = mountains.indexOf(mountainFound)
        mountains.splice(index, 1)
        res.send({ data: mountainFound })
    }
})

app.put("/mountains/:id", (req, res) => {
    const pathVariableMountainId = Number(req.params.id)
    const mountainFound = mountains.find((mountain) => mountain.id === pathVariableMountainId)
    const index = mountains.indexOf(mountainFound)

    if (!pathVariableMountainId || pathVariableMountainId < 1) {
        res.send({ error: "Mountain ID must be a number above 0" })

    } else if (!mountainFound) {
        res.send({ error: "No mountain found with that ID" })

    } else {
        mountains[index].id = pathVariableMountainId
        mountains[index].name = req.body.name
        mountains[index].height = req.body.height
        res.send({ data: mountainFound })
    }
})

app.patch("/mountains/:id", (req, res) => {
    const pathVariableMountainId = Number(req.params.id);
    const mountainFound = mountains.find((mountain) => mountain.id === pathVariableMountainId);

    if (!pathVariableMountainId || pathVariableMountainId < 1) {
        res.send({ error: "Mountain ID must be a number above 0" })

    } else if (!mountainFound) {
        res.send({ error: "No mountain found with that ID" })

    } else {
        Object.assign(mountainFound, req.body);
        res.send({ data: mountainFound });
    }
});


const PORT = 8080
app.listen(PORT, (error) => {
    if (error) {
        console.log("Error starting on the server...", error)
        return
    }
    console.log("Server is running on port", 8080);
})
const express = require("express")
const app = express()

let students = [
    {
        "id": 1,
        "name": "Alin"
    },
    {
        "id": 2,
        "name": "Kevin Albert"
    },
    {
        "id": 3,
        "name": "Marco"
    }
]

app.get("/", (req, res) => {
    res.json(students)
})

app.post("/", (req, res) => {
    const student = {
        ...req.body,
        id: students.length + 1
    }

    students = [...students, student]

    res.json(student)

})

module.exports = app
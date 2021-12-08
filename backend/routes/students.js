const express = require("express")
const app = express()

let students = [
    {
      "name": "Alin"
    },
    {
      "name": "Kevin Albert"
    },
    {
      "name": "Marco"
    }
  ]

  app.get("/", (req, res) => {
    res.json(students)
  })

  app.post("/", (req, res) => {
    const student = {
        ...req.body
      }
    
      students = [...students, student]
    
      res.json(student)
    
    })

module.exports = app
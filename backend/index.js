const express = require("express")
const app = express()
const port = 5000
const cors = require("cors")

app.use(cors())
app.use(express.json())



const students = require("./routes/students")

app.use('/students', students)




app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
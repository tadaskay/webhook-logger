const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json())

app.get("/*", (req, res) => {
    console.log("GET", req.path, new Date().toTimeString())
    console.dir(req.body, { depth: null })
    res.send()
})
app.post("/*", (req, res) => {
    console.log("POST", req.path, new Date().toTimeString())
    console.dir(req.body, { depth: null })
    res.send()
})
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

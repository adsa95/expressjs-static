const dotenv = require("dotenv")
const express = require("express")
const cors = require("cors")

dotenv.config()

const port = process.env.PORT ?? 8080
const staticRoot = process.env.STATIC_ROOT ?? '/httpstatic'

const app = express()
app.use(cors())

app.use((req, _res, next) => {
    console.log(req.method, req.path)
    next()
})

app.use(express.static(staticRoot))

app.listen(port, () => {
    console.log('Listening on port ' + port)
})
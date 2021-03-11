const express = require('express')
const connection = require('../src/config')
const app = express()
const router = express.Router()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

router.get('/', (req, res) => {
    connection.query("SELECT * FROM vrac-ensemble ", (err, results) => {
        if (err) {
            res.status(500).send("Error retrieving data");
        } else {
            res.status(200).json(results);
        }
    })
})
module.exports = router
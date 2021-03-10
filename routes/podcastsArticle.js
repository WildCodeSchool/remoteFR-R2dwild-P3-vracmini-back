const express = require('express')
const connection = require('../src/config')
const app = express()
const router = express.Router()

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

router.get('/api/categorie_podcast_article/podcasts_article', (req, res) => {
    connection.query("SELECT * FROM podcasts_article ", (err, results) => {
        if (err) {
          res.status(500).send("Error retrieving data");
        } else {
          res.status(200).json(results);
        }
    })
  })
  module.exports = router
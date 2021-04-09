const express = require('express')
const connection = require('../src/config')
const router = express.Router()

router.get('/', (req, res) => {
  let sql = 'SELECT * FROM aliments'
  const sqlValues = []
  if (req.query.categories_aliments_id) {
    sql += ' WHERE categories_aliments_id = ?'
    sqlValues.push(req.query.categories_aliments_id)
  }
  connection.query(sql, sqlValues, (err, results) => {
    if (err) {
      res.status(500).send('Error retrieving data')
    } else {
      res.status(200).json(results)
    }
  })
})
router.get('/search', (req, res) => {
  connection.query('SELECT * FROM aliments', (err, results) => {
    err
      ? res.status(404).send('Error retrieving data')
      : res
          .status(200)
          .json(results.filter(alim => alim.name.includes(req.query.name)))
  })
})
router.get('/:id', (req, res) => {
  const alimentId = req.params.id
  connection.query(
    'SELECT * FROM aliments WHERE id = ?',
    [alimentId],
    (err, results) => {
      if (err) {
        res.status(500).send(`An error occurred: ${err.message}`)
      }
      if (results.length === 0) {
        return res.status(404).send('Aliment not found')
      }
      return res.json(results[0])
    }
  )
})

router.post('/', (req, res) => {
  connection.query('INSERT INTO aliments SET ?', req.body, err => {
    if (err) {
      console.log(err)
      res.status(500).send('Error adding data')
    } else {
      res.status(200).send('Success adding data !')
    }
  })
})

module.exports = router

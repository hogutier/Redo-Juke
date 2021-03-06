const express = require('express')
const router = express.Router()
const {Album, Song, Artist} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const data = await Album.findAll({
      include: [{model: Artist}, {model: Song}]
    })
    res.json(data)
  } catch (error) {
    next(error)
  }
})

router.get('/:albumId', async (req, res, next) => {
  try {
    const data = await Album.findAll({
      include: [{model: Artist}, {model: Song}],
      where: {id: req.params.albumId}
    })
    res.json(data)
  } catch (error) {
    next(error)
  }
})

module.exports = router

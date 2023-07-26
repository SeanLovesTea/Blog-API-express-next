const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', async (req, res) => {
  try {
    const data = await Post.find()
    res.json(data)
  } catch (err) {
    console.log(err)
  }
})

router.get('/post/:id', async (req, res) => {
  try {
    let slug = req.params.id
    const data = await Post.findById({_id: slug})
    console.log(data)
    res.json(data)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
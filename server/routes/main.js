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
router.get('/published', async (req, res) => {
  try {
    const data = await Post.find({ published: true })
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
router.post('/add-post', async (req, res) => {
  try {
    const newPost = new Post({
      title: req.body.title,
      body: req.body.body,
      published: req.body.isPublished,
    })
    
    await Post.create(newPost)
    res.send("Post Created")

  } catch (error) {
    console.log(error)
  }
})
router.put('/edit-post/:id', async (req, res) => {
  try {
    await Post.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      body: req.body.body,
      published: req.body.published,
      updatedAt: Date.now()
    })
    res.send("success")
  } catch (error) {
    console.log(error)
  }
})
router.delete('/delete-post/:id', async (req, res) => {

  try {
    await Post.deleteOne({ _id: req.params.id });
    res.end()
  } catch (error) {
    console.log(error);
  }
})

module.exports = router
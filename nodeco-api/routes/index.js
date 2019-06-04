'use strict'

const express = require('express')
const router = new express.Router()
const postController = require('../controllers/post.controller')

// Products
router.get('/posts', postController.getPosts)
router.get('/posts/:id', postController.getPost)
router.post('/posts', postController.createPost)
router.put('/posts/:id', postController.updatePost)
router.delete('/posts/:id', postController.removePost)

exports = module.exports = router

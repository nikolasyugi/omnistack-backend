const express = require('express');
const uploadConfig = require('./config/upload');

const routes = new express.Router();

const postController = require('./controllers/post-controller')
const likeController = require('./controllers/like-controller')
const multer = require('multer');
const upload = multer(uploadConfig);

routes.post('/posts', upload.single('image'), postController.store)
routes.get('/posts', postController.index)
routes.post('/posts/:id/like', likeController.store)

module.exports = routes;
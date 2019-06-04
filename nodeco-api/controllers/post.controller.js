const postModel = require('../models/post.model');

const getPosts = (request, response) => {
  return postModel
    .getPosts()
    .then(posts => {
      response.json({ status: 200, posts });
    })
    .catch(error => {
      response.json({ status: 500, error: error.message });
    });
};

const getPost = (request, response) => {
  return postModel
    .getPost(request.params.id)
    .then(post => {
      response.json({ status: 200, post });
    })
    .catch(error => {
      response.json({ status: 500, error: error.message });
    });
};

const createPost = (request, response) => {
  if (!request.body) {
    return response.status(400).json({ error: 'no hay payload' });
  }
  return postModel
    .createPost(request.body)
    .then(post => {
      response.json({ status: 201, message: `La entrada ha sido creada` });
    })
    .catch(error => {
      response.json({ status: 500, error: error.message });
    });
};

const updatePost = (request, response) => {
  if (!request.body) {
    return response.status(400).json({ error: 'no hay payload' });
  }
  return postModel
    .updatePost(request.params.id, request.body)
    .then(post => {
      response.json({ status: 201, message: `La entrada ha sido actualizada` });
    })
    .catch(error => {
      response.json({ status: 500, error: error.message });
    });
};

const removePost = (request, response) => {
  if (!request.body) {
    return response.status(400).json({ error: 'no hay payload' });
  }
  return postModel
    .removePost(request.params.id, request.body)
    .then(post => {
      response.json({ status: 201, message: 'La entradao ha sido eliminada' });
    })
    .catch(error => {
      response.json({ status: 500, error: error.message });
    });
};

exports = module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  removePost
};

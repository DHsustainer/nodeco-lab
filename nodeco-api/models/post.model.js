const postSchema = require('../schemas/post.schema');

const getPosts = () => {
  return postSchema
    .find()
    .then(posts => posts)
    .catch(error => error);
};

const getPost = id => {
  return postSchema
    .findById(id)
    .then(post => post)
    .catch(error => error);
};

const createPost = post => {
  let Post = new postSchema(post);
  return Post.save(post)
    .then(post => post)
    .catch(error => error);
};

const updatePost = (id, post) => {
  return postSchema
    .findOneAndUpdate({ _id: id }, { $set: post }, { new: true })
    .then(post => post)
    .catch(error => error);
};

const removePost = id => {
  return postSchema
    .findOneAndDelete({ _id: id })
    .then(post => post)
    .catch(error => error);
};

exports = module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  removePost
};

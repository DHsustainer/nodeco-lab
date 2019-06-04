import apiService from './apiService'

const postService = {}
postService.getPosts = () => {
  return apiService.get('posts')
  .then(posts => posts.data)
  .catch(error => error)
}

export default postService
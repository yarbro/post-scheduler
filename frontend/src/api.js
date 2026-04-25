import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
})

export const getPosts = () => api.get("/posts").then((res) => res.data)
export const getPost = (id) => api.get(`/posts/${id}`).then((res) => res.data)

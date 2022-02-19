import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000'});

// export const fetchPosts = () => axios.get();
// export const createPost = (newPost) => axios.post(url, newPost);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => {
	return API.post("/posts", newPost);
};
export const updatePost = (id, updatedPost) => {
	return API.patch(`/posts/${id}`, updatedPost);
};
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
const axios = require('axios');
const { API_BASE_URL } = require('../config');

const getPostsByUserId = async (userId) => {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}/posts`);
    return response.data;
};

const getCommentsByPostId = async (postId) => {
    const response = await axios.get(`${API_BASE_URL}/posts/${postId}`);
    return response.data;
};

module.exports = { getPostsByUserId, getCommentsByPostId };
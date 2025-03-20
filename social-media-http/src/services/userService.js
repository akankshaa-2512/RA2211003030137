// src/services/userService.js

const axios = require('axios');
const { API_BASE_URL } = require('../config');

// Function to get all users
const getUsers = async () => {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
};

// Function to get posts by user ID
const getPostsByUserId = async (userId) => {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}/posts`);
    return response.data;
};

module.exports = { getUsers, getPostsByUserId };
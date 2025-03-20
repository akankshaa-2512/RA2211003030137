const postService = require('../services/postService');

const getTopOrLatestPosts = async (req, res) => {
    const { type } = req.query;

    try {
        const posts = await postService.getPostsByUserId(); // Fetch all posts
        if (type === 'popular') {
            const popularPosts = posts.filter(post => post.comments.length === Math.max(...posts.map(p => p.comments.length)));
            return res.json(popularPosts);
        } else if (type === 'latest') {
            const latestPosts = posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5);
            return res.json(latestPosts);
        } else {
            return res.status(400).json({ error: 'Invalid type parameter' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
};

module.exports = { getTopOrLatestPosts };
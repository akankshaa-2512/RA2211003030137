const userService = require('../services/userService');

// Controller to get top users
const getTopUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        const userPostCounts = {};

        for (const user of users) {
            const posts = await userService.getPostsByUserId(user.id); 
            userPostCounts[user.id] = posts.length;
        }

        const topUsers = Object.entries(userPostCounts)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 5)
            .map(([id]) => users.find(user => user.id == id));

        res.json(topUsers);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch top users' });
    }
};

module.exports = { getTopUsers };
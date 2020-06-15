const express = require('express');
const router = express.Router({ mergeParams: true });
const tags = require('../data/tags');
const posts = require('./posts');

router.use('/:tagID/posts', posts);

router.get('/:tagID', (req, res) => {
    const tagID = Number(req.params.tagID);
    const foundTag = tags.filter((tag) => tag.id === tagID);
    if (!foundTag) {
        return res.status(404).json({
        error: 'Post not found',
        });
    }
    res.json(foundTag);
});

router.get('/', (req, res) => {
    return res.json(tags);
});

module.exports = router;

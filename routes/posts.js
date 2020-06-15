// routes/post.js
const express = require('express');
const router = express.Router({ mergeParams: true });
const fakePosts = require('../data/posts');
const comments = require('./comments');

router.use('/:postId/comments', comments);

// Get a posts by tag
router.get('/', (req, res) => {
    // If we forget { mergeParams: true }, req.params.tagID will be `undefined`
  const tagID = Number(req.params.tagID);
  // Keep only post whose post_id matches the tagID parameter
  const tagPost = fakePosts.filter((post) => post.tag_id === tagID);
  res.json(tagPost);
  });

// Get a single post with http://localhost:8001/api/posts/:postID
router.get('/:id', (req, res) => {
const postId = Number(req.params.id);
const foundPost = fakePosts.find((post) => post.id === postId);
if (!foundPost) {
    return res.status(404).json({
    error: 'Post not found',
    });
}
return res.json(foundPost);
})

module.exports = router;

const express = require('express');
const router = express.Router();

// Define your routes here
router.get('/users', (req, res) => {
    res.send('User route');
});

module.exports = router;

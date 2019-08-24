const express = require('express');
var router = express.Router();
var posts = require('../controllers/posts');

router.get('/list', function(req, res){
    posts
        .getPosts()
        .then(data => {
            res.jsonp(data);
        }).catch(error => res.status(500).jsonp(error));
});



module.exports = router;

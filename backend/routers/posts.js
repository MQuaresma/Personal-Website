const express = require('express');
var router = express.Router();
const posts = require('../controllers/posts');

router.get('/list', function(req, res){
    posts
        .getPosts()
        .then(data => {
            res.jsonp(data);
        }).catch(error => res.status(500).jsonp(error));
});

router.post('', function(req, res){
    posts
        .getByTitle(req.body.title)
        .then(data => {
            res.jsonp(data);
        }).catch(error => res.status(500).jsonp(error));
});


module.exports = router;

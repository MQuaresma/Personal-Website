const express = require('express');
var router = express.Router();
const projects = require('../controllers/projects');

router.get('/list', function(req, res) {    
    projects
        .getProjects()
        .then(data => {
              res.jsonp(data);
        }).catch(error => req.status(500).jsonp(error));
});

router.post('', function(req, res) {
    projects
        .getByName(req.body.name)
        .then(data => {
            res.jsonp(data);
        }).catch(error => req.status(500).jsonp(error));
});

module.exports = router;

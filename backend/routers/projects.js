const express = require('express');
var router = express.Router();
var projects = require('../controllers/projects');
var Project = require('../models/projects');

router.get('/list', function(req, res) {    
    projects
        .getProjects()
        .then(data => {
              res.jsonp(data);
        }).catch(error => req.status(500).jsonp(error));
});

module.exports = router;

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var Logo = require('./Logo');

router.get('/', function (req, res) {
    Logo.getAllLogos(function(err,rows){
        console.log(rows);

        if(err) {
            res.status(400).json(err);
        }
        else
        {
            console.log(rows);
            res.json(rows);
        }
    });
});

module.exports = router;

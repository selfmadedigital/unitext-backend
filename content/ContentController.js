var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var Content = require('./Content');

router.get('/', function (req, res) {
    Content.getContent(function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

router.post('/', function (req, res) {
    Content.updateContent(req.body,function(err,count){
        if(err)
        {
            res.json({success: false, error: err})
        }
        else{
            res.json({success: true, error: null});
        }
    });
});

module.exports = router;

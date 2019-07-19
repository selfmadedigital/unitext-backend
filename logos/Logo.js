var db = require('../db');
const fs = require('fs');
var files = [];

var Logo = {
    getAllLogos: function (callback) {
        fs.readdir('./uploads/', function(err, items) {
            for (var i=0; i<items.length; i++) {
                var file = './uploads/' + items[i];

                files.push(file);
            }
        });
        return JSON.stringify(files);

    }
}

function generate_callback(file) {
    return function(err, stats) {
        console.log(file);
        console.log(stats["size"]);
    }
};

module.exports = Logo;

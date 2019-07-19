var db = require('../db');

var User = {
    authenticateUser: function(callback)
    {
        return db.query("SELECT id, first_name, last_name, token FROM users", callback);
    },
}

module.exports = User;

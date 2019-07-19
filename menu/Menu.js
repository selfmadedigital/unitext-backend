var db = require('../db');

var Menu = {
    getMenu: function(callback)
    {
        return db.query("SELECT id, lang, text, href FROM menu", callback);
    },
    updateMenu: function (Menu, callback) {
        return db.query("UPDATE menu SET text='" + Menu.text + "' WHERE id = '" + Menu.id + "'", callback);
    }
}

module.exports = Menu;

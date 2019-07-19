var db = require('../db');

var Content = {
    getContent: function(callback)
    {
        return db.query("SELECT id, lang, section, content from content", callback);
    },

    updateContent: function (Content, callback) {
        return db.query("UPDATE content SET content='" + Content.content + "' WHERE id = '" + Content.id + "'", callback);
    }
}

module.exports = Content;

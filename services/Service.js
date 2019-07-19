var db = require('../db');

var Service = {
    getServices: function(callback)
    {
        return db.query("SELECT title,content,icon,sort,id, lang FROM services", callback);
    },
    updateServices: function (Service, callback) {
        return db.query("UPDATE services SET title='" + Service.title + "', content='" + Service.content + "' WHERE id = '" + Service.id + "'", callback);
    }
}

module.exports = Service;

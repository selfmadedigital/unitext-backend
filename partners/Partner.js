var db = require('../db');
const fs = require('fs');


var Partner = {
    getPartners: function(callback)
    {
        return db.query("SELECT name, image, href, id FROM partners", callback);
    },
    updatePartners: function (Partner, callback) {
        return db.query("UPDATE partners SET href='" + Partner.href + "' WHERE id = '" + Partner.id + "'", callback);
    },
}

module.exports = Partner;

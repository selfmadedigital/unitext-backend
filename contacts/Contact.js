var db = require('../db');

var Contact = {
    getContacts: function(callback)
    {
        return db.query("SELECT id, title, value FROM contact", callback);
    },
    updateContacts: function (Contact, callback) {
        return db.query("UPDATE contact SET value='" + Contact.value + "' WHERE id = '" + Contact.id + "'", callback);
    }
}

module.exports = Contact;

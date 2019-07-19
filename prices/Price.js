var db = require('../db');

var Price = {
    getPrices: function(callback)
    {
        return db.query("SELECT title,subtitle,content,price,id, lang FROM prices", callback);
    },
    updatePrices: function (Price, callback) {
        return db.query("UPDATE prices SET title='" + Price.title + "', subtitle='" + Price.subtitle + "', content='" + Price.content + "', price='" + Price.price + "' WHERE id = '" + Price.id + "'", callback);
    }
}

module.exports = Price;

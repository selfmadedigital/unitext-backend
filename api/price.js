module.exports = (app, db) => {
    app.get("/price", (req, res) =>
        db.price.findAll().then((result) => res.json(result))
    );

    app.put("/price", (req, res) => {
        console.log(req.body);
        db.price.update({
                title: req.body.title,
                subtitle: req.body.subtitle,
                content: req.body.content,
                price: req.body.price,
            },
            {
                where: {
                    id: req.body.id
                }
            }).then((result) => res.json(result && result.length === 1 ? result[0] : 0))
    });
}

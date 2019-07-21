module.exports = (app, db) => {
    app.get("/menu", (req, res) =>
        db.menu.findAll().then((result) => res.json(result))
    );

    app.put("/menu", (req, res) =>
        db.menu.update({
                text: req.body.text,
            },
            {
                where: {
                    id: req.body.id
                }
            }).then((result) => res.json(result))
    );
}

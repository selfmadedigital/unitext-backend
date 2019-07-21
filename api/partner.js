module.exports = (app, db) => {
    app.get("/partner", (req, res) =>
        db.partner.findAll().then((result) => res.json(result))
    );

    app.put("/partner", (req, res) =>
        db.partner.update({
                name: req.body.name,
                href: req.body.href,
                sort: req.body.sort,
            },
            {
                where: {
                    id: req.body.id
                }
            }).then((result) => res.json(result && result.length === 1 ? result[0] : 0))
    );

    app.post("/partner", (req, res) =>
        db.partner.create({
            image: req.body.image,
        }).then((result) => res.json(result))
    );

    app.delete("/partner/:id", (req, res) =>
        db.partner.destroy({
            where: {
                id: req.params.id
            }
        }).then((result) => res.json(result))
    );
}

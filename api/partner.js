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
            }).then((result) => res.json(result))
    );

    app.post("/partner", (req, res) =>
        db.partner.create({
            image: req.body.image,
        }).then((result) => res.json(result))
    );
}

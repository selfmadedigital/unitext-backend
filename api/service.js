module.exports = (app, db) => {
    app.get("/service", (req, res) =>
        db.service.findAll().then((result) => res.json(result))
    );

    app.put("/service", (req, res) =>
        db.service.update({
                title: req.body.title,
                content: req.body.content,
                sort: req.body.sort
            },
            {
                where: {
                    id: req.body.id
                }
            }).then((result) => res.json(result && result.length === 1 ? result[0] : 0))
    );
}

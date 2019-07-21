module.exports = (app, db) => {
    app.get("/content", (req, res) =>
        db.content.findAll().then((result) => res.json(result))
    );

    app.put("/content", (req, res) =>
        db.content.update({
                content: req.body.content
            },
            {
                where: {
                    id: req.body.id
                }
            }).then((result) => res.json(result && result.length === 1 ? result[0] : 0))
    );
}

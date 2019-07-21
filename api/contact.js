module.exports = (app, db) => {
    app.get("/contact", (req, res) =>
        db.contact.findAll().then((result) => res.json(result))
    );

    app.put("/contact", (req, res) => {
        db.contact.update({
                value: req.body.value,
            },
            {
                where: {
                    id: req.body.id
                }
            }).then((result) =>
            res.json(result && result.length === 1 ? result[0] : 0)
        )
    })
}

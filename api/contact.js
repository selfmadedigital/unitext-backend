module.exports = (app, db) => {
    app.get("/contact", (req, res) =>
        db.contact.findAll().then((result) => res.json(result))
    );

    app.put("/contact", (req, res) => {
        console.log(req.body.id);
        db.contact.update({
                value: req.body.value,
            },
            {
                where: {
                    id: req.body.id
                }
            }).then((result) => res.json(result))
    })
}

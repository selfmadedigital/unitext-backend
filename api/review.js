module.exports = (app, db) => {
    app.get("/review", (req, res) =>
        db.review.findAll().then((result) => res.json(result))
    );

    app.get("/review/:id", (req, res) =>
        db.review.findAll({
            where: {
                id: req.params.id
            }
        }).then((result) => res.json(result))
    );

    app.get("/review/fetch", (req, res) =>
        console.log('fetching from google')
    )
    ;

    app.put("/review", (req, res) =>
        db.review.update({
                allowed: req.body.allowed,
            },
            {
                where: {
                    id: req.body.id
                }
            }).then((result) => res.json(result && result.length === 1 ? result[0] : 0))
    );

    app.post("/review", (req, res) =>
        db.review.create({
            user: req.body.user,
            user_picture: req.body.user_picture,
            rating: req.body.rating,
            text: req.body.text,
            date: req.body.date,
            allowed: req.body.allowed
        }).then((result) => res.json(result))
    );
}

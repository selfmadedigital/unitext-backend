module.exports = (app, db) => {
    app.post("/user", (req, res) => {
        db.user.findAll({
            where: {
                username: req.body.username,
                password: req.body.password,
            },
            limit: 1
        }).then(result => {
            res.json(result);
        });
    });
}

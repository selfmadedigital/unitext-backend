module.exports = (app, db) => {
    var express = require('express');
    var fs = require('fs');

    app.post('/upload', async (req, res) => {
        try {
            if (!req.files) {
                res.send({
                    status: false,
                    message: 'No file uploaded'
                });
            } else {
                let logo = req.files.logo;
                let logoName = logo.name.includes(' ') ? logo.name.replace(' ', '_') : logo.name;
                let filePath = './uploads/' + logoName;

                if (fs.existsSync(filePath)) {
                    filePath = './uploads/' + Date.now() + '_' + logoName;
                }

                logo.mv(filePath);

                res.send({
                    status: true,
                    message: 'File is uploaded',
                    data: {
                        name: filePath,
                        mimetype: logo.mimetype,
                        size: logo.size
                    }
                });
            }
        } catch (err) {
            res.status(500).send(err);
        }
    });
}

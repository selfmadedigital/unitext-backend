const express = require("express");
const fileUpload = require('express-fileupload');
const ipfilter = require('express-ipfilter').IpFilter;
const ipDeniedError = require('express-ipfilter').IpDeniedError;
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const db = require("./models");

const apiContact = require("./api/contact");
const apiContent = require("./api/content");
const apiMenu = require("./api/menu");
const apiPartner = require("./api/partner");
const apiPrice = require("./api/price");
const apiService = require("./api/service");
const apiUser = require("./api/user");
const apiUpload = require("./api/upload");

const app = express();

app.use(fileUpload({
    createParentPath: true,
    limits: {
        fileSize: 2 * 1024 * 1024 * 1024
    },
}));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("./uploads"));
app.use(morgan('dev'));

const ips = ['::1'];

app.use(ipfilter(ips, {mode: 'allow'}));
app.use((err, req, res, _next) => {
    if (err) {
        res.json({error: err})
    }
});

apiContact(app, db);
apiContent(app, db);
apiMenu(app, db);
apiPartner(app, db);
apiPrice(app, db);
apiService(app, db);
apiUser(app, db);
apiUpload(app, db);

db.sequelize.sync().then(() => {
    app.listen(3000, () => console.log("App listening on port 3000!"));
});

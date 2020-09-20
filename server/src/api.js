const express = require("express");
const serverless = require("serverless-http");
const handle = require('./handlers/index');
const routes = require('./routes');
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        hello: "hi!"
    });
});

app.use(`/.netlify/functions/api`, router);
app.use('/.netlify/functions/api/handled', routes.mainAPI);

module.exports = app;
module.exports.handler = serverless(app);
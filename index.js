const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const math = require('mathjs');

app.use(bodyParser.json());
const reqIP = require('request-ip');

app.post('/calc', async (req, res) => {
    try {
        let json = req.body;
        let calc = String(json.calculation);
        res.send(String(Function("return " + calc)(require)));
    } catch (error) {
        res.send(e.message);
        console.error(e.message);
    }

});

app.listen(process.env.port, () => {
  console.log(`api listening on port ${process.env.port}`);
});

module.export = app;
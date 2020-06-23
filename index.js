const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));

app.get('/', (req, res) => {
    return res.json({
        working: true
    });
});

require('./service/api.route')(app);

app.listen(3000);
console.log("running on 3000");
const express = require('express');
const attachMiddleware = require('./attachMiddleware');
const handler = require('./handler');

const app = express();
attachMiddleware(app);
app.post('/', handler);

const port = +process.env['PORT'];

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});

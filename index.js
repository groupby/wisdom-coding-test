const express = require('express');

const app = express();

// your code here

const port = +process.env['PORT'];

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});

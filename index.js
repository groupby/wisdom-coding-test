const express = require('express');

const app = express();

// your code here
const fs = require('fs');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

function isValidString(propName, required, min, max, req) {
    const provided = typeof req.body[propName] !== undefined;

    if (!provided) {
        if (required) {
            return false;
        } else {
            return true;
        }
    }

    const value = req.body[propName];

    if (typeof value !== 'string') {
        return false;
    }
    if (value.length < min || value.length > max) {
        return false;
    }

    return true;
}

app.post('/beacon', function (req, res) {
    // Parse from headers
    const userAgent = req.get('User-Agent');

    // Validate body
    if (!isValidString('productId', true, 1, 100, req)
        || !isValidString('productName', true, 1, 100, req)
        || !isValidString('productCategory', true, 1, 100, req)
        || !isValidString('productDescription', false, 1, 10000, req)) {
        return res.status(400).send();
    }

    // Use user agent and parsed body
    const beacon = {
        userAgent,
        productId: req.body.productId,
        productName: req.body.productName,
        productCategory: req.body.productCategory,
        productDescription: req.body.productDescription,
    };

    fs.writeFileSync('beacon.json', JSON.stringify(beacon));

    return res.status(204).send();
});

const port = +process.env['PORT'];

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});

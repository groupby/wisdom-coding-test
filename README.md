# wisdom-coding-test

## Context

You're working on an API that accepts data sent by web browsers. The data is sent from the browser using AJAX as a POST request with a JSON body. You must parse the request, validate it, and save the data if it passes validation. This data is referred to as a "beacon".

## Acceptance criteria

- The app exposes a POST endpoint at the route `/beacon`.
- The app parses the request to get the following information for the beacon, with the following validation rules:
  - From headers:
    - User agent string
  - From request body:
    - Product id - required, string, min 1 char, max 100 chars
    - Product name - required, string, min 1 char, max 100 chars
    - Product category - required, string, min 1 char, max 100 chars
    - Product description - not required, string, min 1 char, max 10000 chars
- The app returns a 204 response with no body if validation passes, and a 400 response with no body if validation fails.
- The app records the beacon on disk as minified JSON in a file called `beacon.json` in the current directory if validation passes.

For example, if the request is sent from Chrome and has a body of:

```json
{
    "productId": "12345",
    "productName": "toilet paper",
    "productCategory": "bathroom things",
    "productDescription": "We probably do not need to tell you how to use this, check Wikipedia."
}
```

Then the beacon stored on disk in the file `beacon.json` will be:

```
{"userAgent":"Chrome 80.0.3987.87","productId": "12345","productName":"toilet paper","productCategory":"bathroom things","productDescription":"We probably do not need to tell you how to use this, check Wikipedia."}
```

## Testing

You can test your program as you code using the command `PORT=8080 node index.js` and you can send a test request with a `curl` command such as `curl -v -H 'Content-Type: application/json' -d '{"productId": "12345","productName":"toilet paper","productCategory":"bathroom things","productDescription":"We probably do not need to tell you how to use this, check Wikipedia."}' http://localhost:8080/beacon`.

*If you're on Windows, be sure to use Git Bash to run these commands, because they won't work in PowerShell of the normal Windows command prompt.*

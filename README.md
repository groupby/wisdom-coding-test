# wisdom-coding-test

Finish the Express web app by filling in the `attachMiddleware.js` and `handler.js` files. You cannot edit `index.js`. The app must accept a JSON body POST request and perform the following steps:

- Validate the request body.
- Get the user agent string from the request (do not worry about parsing it).
- Save the complete beacon with the request body and user agent to the disk at the current directory with the file name `beacon.json` if the request passes validation.
- Return a 204 response with no body if the validation passes.
- Return a 400 response with no body if the validation fails.

The validation rules for the request body are:

- It has the JSON property `productName`.
- The type of the JSON property `productName` is `string`.
- The product name is at least 1 character.

You may make the following assumptions about the request:

- It will always be a POST request.
- It will always have the `application/json` Content-Type.

For example, if the request body from a `curl` command is `{"productName":"apples"}`, then recorded on the disk at `./beacon.json` should be a file with the contents `{"productName":"apples","userAgent":"curl/7.58.0"}`.

You may create additional files if you like to organize your code, as long as you don't edit the `index.js` file. You may use any resource online to help you, such as the Express docs (https://expressjs.com/).

## Testing

You can test your program as you code using the command `PORT=8080 node index.js` and you can send a test request with a `curl` command such as `curl -v -H 'Content-Type: application/json' -d '{"productName":"apples"}' http://localhost:8080`.

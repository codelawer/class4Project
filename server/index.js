// Path: server/index.js
// Purpose of file: To start our HTTP server
const app = require('./app'); // This loads in the code from app.js

const PORT = 8080;
app.listen(PORT, function() {
    // eslint-disable-next-line no-console
    console.log(`The server is is running on port ${PORT}`);
}); // We can use that "app" functionality now in this file to start the server

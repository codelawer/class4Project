// Path: server/api/index.js
// Purpose of file: To contain all our routes and necessary logic
const apiRouter = require('express').Router();

apiRouter.get('/', function(req, res) {
    res.send('triggered by GET /api/ path');
});

apiRouter.post('/add', function(req, res) {
    res.send('triggered by POST /api/add path');
});

module.exports = apiRouter;

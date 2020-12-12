const express = require('express')
const app = express();
const port = process.env.PORT || 9320;
const hostname = '0.0.0.0';
const routes = require('./api/routes');
routes(app);
app.listen(port,hostname, function() {
   console.log('Server started on port: ' + port);
});
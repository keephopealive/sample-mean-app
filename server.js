// npm install --save body-parser express mongoose mongoose-validator mysql socket.io express-flash express-session express-validator
// npm install --save-dev @types/express debug supports-color ts-node typescript

// ============ Express ============ 
const express = require('express');
const app = express();

// ============ Path ============ 
const path = require('path');

// ============ Mongoose ============ 
require("./server/config/mongoose.config.js")

// ============ Body Parser ============ 
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ============ Server Config ============ 
app.listen(1337);

// ============ Static Routes ============ 
app.use(express.static(path.join(__dirname, "ng-app/dist/ng-app")));

// ============ Routes ============ 
const routes = require('./server/config/routes.config.js')
routes(app);
// Same as above: require('./server/config/routes.config.js')(app);

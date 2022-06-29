/** *****************************************************
 * Define some constants and variables
 ******************************************************* */

// This makes variables from .env file available in my code
const dotenv = require('dotenv').config();

// Express
const express = require('express');
const app = express();

// Port
const port = process.env.PORT || 3000;

// mongoose / mongodb
const mongoose = require('mongoose');
const connectDB = require('./config/dbConnect');
connectDB();

// Modules voor passport
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');

// Routes
const routes = require('./routes/userRoutes');

// Compress
const {
  startCompress
} = require('./config/compression');
startCompress();

/** *****************************************************
 * Middleware
 ******************************************************* */
// Express body-parser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Sets my static folder to public
app.use(express.static(`${__dirname}/public`));

// Passport errormessage / session
app.use(flash());
app.use(
  session({
    secret: 'secret',
    saveUninitialized: false,
    resave: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(methodOverride('_method'));
/** *****************************************************
 * Set template engine
 ******************************************************* */
app.set('view engine', 'ejs');

/** *****************************************************
 * Routes
 ******************************************************* */
app.use(routes);

/** *****************************************************
 * If no routes give response, show 404
 ******************************************************* */
app.use((req, res) => {
  res.status(404);
  res.redirect('/error');
});

/** *****************************************************
 * Start webserver
 ******************************************************* */
mongoose.connection.once('open', () => {
  app.listen(port);
});
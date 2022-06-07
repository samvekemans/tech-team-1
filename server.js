// This makes variables from .env file available in my code
const dotenv = require('dotenv').config();

// Require variables
const express = require('express');
const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');
const path = require('path');
const multer = require('multer');

// MULTER
// Multer storage
const storage = multer.diskStorage({
  destination: `${__dirname}/public/uploads`,
  filename(req, file, cb) {
    cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
  },
});
// Multer upload function
const upload = multer({
  storage,
}).single('pictureUser');

// Sets the port
const port = process.env.PORT || 8080;

// Variables
let db;
let query = {};
let oldTradesTitle = '';
let careTradesTitle = '';

// Express
const app = express();

// Express body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CONFIGURATION
// Stets my static folder to public
app.use(express.static(`${__dirname}/public`));
// tells that it should views using ejs
app.set('view engine', 'ejs');

// Rendering index page
app.get('/', async (req, res) => {
  res.render('pages/index');
});

// render register page old-person account
app.get('/ouderen', (req, res) => {
  const iconTitles = {
    first: 'Welke eigenschappen verwacht je van de zorgmedewerker?',
    second: 'Welke eigenschappen passen het beste bij jou?',
  };
  const valueType = 'ouderen';
  const radioTitle = 'Waar zoekt u naar?';
  const trades = {
    first: 'oldPersonTrades[]',
    second: 'careGiverTrades[]',
  };

  res.render('pages/register', {
    radioTitle,
    valueType,
    trades,
    iconTitles,
  });
});

// render register page caregiver account
app.get('/zorgmedewerker', (req, res) => {
  const iconTitles = {
    first: 'Welke eigenschappen passen het beste bij jou?',
    second: 'Welke eigenschappen verwacht je van de oudere persoon?',
  };
  const valueType = 'zorgmedewerker';
  const radioTitle = 'Wat wil je doen?';
  const trades = {
    first: 'careGiverTrades[]',
    second: 'oldPersonTrades[]',
  };

  res.render('pages/register', {
    radioTitle,
    valueType,
    trades,
    iconTitles,
  });
});

// Render error page
app.get('/error', (req, res) => {
  res.render('pages/error');
});

// Render users page with the users from the database and a query from new user
app.get('/users', async (req, res) => {
  const users = await db.collection('profiles').find(query).toArray();

  res.render('pages/users', {
    users,
    oldTradesTitle,
    careTradesTitle,
  });
});

// deatil pagina voor elke gebruiker
app.get('/:userId', async (req, res) => {
  const user = await db
    .collection('profiles')
    .findOne({ _id: ObjectId(req.params.userId) });

  res.render('pages/user-detail.ejs', {
    user,
    oldTradesTitle,
    careTradesTitle,
  });
});

// Post from register with an upload from multer
app.post('/ouderen', upload, async (req, res) => {
  console.log(req.body);
  // New user variable
  const user = {
    accountType: req.body.account,
    name: req.body.name,
    age: req.body.age,
    aboutUser: req.body.description,
    help: req.body.help,
    image: `uploads/${req.file.filename}`,
    oldTrades: req.body.oldPersonTrades,
    careTrades: req.body.careGiverTrades,
    city: req.body.city,
    houseNumber: req.body.houseNumber,
    street: req.body.street,
    postcode: req.body.zipcode[0],
  };

  // putting new user in database insertOne()
  // eslint-disable-next-line no-useless-catch
  try {
    await db.collection('profiles').insertOne(user);
  } catch (error) {
    throw error;
  }

  // Titles for in carousel
  if (req.body.account === 'ouderen') {
    careTradesTitle = 'Mijn eigenschappen:';
    oldTradesTitle = 'De zorgmedewerker wil dit graag van de ouderen:';
  }
  if (req.body.account === 'zorgmedewerker') {
    oldTradesTitle = 'Mijn eigenschappen:';
    careTradesTitle = 'Wat de ouderen verwacht van jou:';
  }

  // Filters for the new user
  // eslint-disable-next-line no-unused-expressions
  query = {
    accountType: req.body.account === 'ouderen' ? 'zorgmedewerker' : 'ouderen',
    oldTrades: { $in: req.body.oldPersonTrades },
    careTrades: { $in: req.body.careGiverTrades },
    help: { $in: req.body.help },
  };
  // redirect to the matching users
  res.redirect('/users');
});

// Fallback for false url
app.use((req, res, next) => {
  res.status(404);
  res.redirect('/error');
});

// Conecting to the database
async function conectDB() {
  const uri = process.env.DB_URI;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  // eslint-disable-next-line no-useless-catch
  try {
    await client.connect();
    db = client.db(process.env.DB_NAME);
  } catch (error) {
    throw error;
  }
}

// Listening to the port
app.listen(port, () => {
  conectDB();
});

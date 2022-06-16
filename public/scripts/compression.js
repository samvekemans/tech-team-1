// Require compress
const compression = require('compression');

// require express
const express = require('express');

// express
const app = express();

// compressie van alle responses
app.use(compression());

// functie voor de compression
function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) {
    // geen respones compressen met bovenstaande request header
    return false;
  }
  // fallback naar de standaard filter functie
  return compression.filter(req, res);
}

// server-sent event stream voor als de webpagina automatisch updates krijgt
app.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');

  // stuur elke 2 seconden een ping
  const timer = setInterval(() => {
    res.write('data; ping\n\n');

    // de res.flush method forceert deels gecompresste responses om naar de client te worden geflushed
    res.flush();
  }, 2000);

  res.on('close', () => {
    clearInterval(timer);
  });
});

// filter voor compression
app.use(compression({ filter: shouldCompress }));

// functie compresss test of bestand wordt gekoppeld via module.exports = { compress, compressed, shouldCompress}
function compress() {
  console.log('test compress');
}

function compressed() {
  console.log('compressed!!!');
}

module.exports = { compress, compressed, shouldCompress };
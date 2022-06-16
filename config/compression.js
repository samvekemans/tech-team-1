// Require compression
const compression = require('compression');

// aanroepen functie voor compression
startCompress();

// compressie van alle responses
function startCompress() {
  app.use(compression({
    // level van compressie vaststellen, 6 (of -1) is de default waarde (0 = geen compressie, 9 = max compressie), hoe hoger de level hoe langer de compressie kan duren.
    level: 6,
    // threshold vaststellen, waarde onder de aangeven bites worden niet gecompressed
    // 10KB
    threshold: 10 * 1000,
    // filter
    filter: (req, res) => {
      if (req.headers['x-no-compression']) {
        return false
      };
      // fallback naar de standaard filter
      return compression.filter(req, res);
    },
  }));
};


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

module.exports = { startCompress };
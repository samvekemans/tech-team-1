const zorg = (req, res) => {
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
};

module.exports = zorg;

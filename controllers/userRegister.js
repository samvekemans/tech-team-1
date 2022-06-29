const title = "Registreren Ouderen";

const register = (req, res) => {
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
    title,
  });
};

module.exports = register;
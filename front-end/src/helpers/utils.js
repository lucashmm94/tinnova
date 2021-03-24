const getDateFormated = (dateMiliseconds) => {
  return new Date(dateMiliseconds).toLocaleDateString();
};

const getFormatCurrency = (value, currencyCode) => {
  return value.toLocaleString('pt-br', {
    style: 'currency',
    currency: currencyCode,
  });
};
export { getDateFormated, getFormatCurrency };

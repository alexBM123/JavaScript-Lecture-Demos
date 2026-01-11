document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form').onsubmit = () => {
    const currency = document
      .querySelector('#currency')
      .value
      .toUpperCase();

    fetch('https://api.exchangeratesapi.io/latest?base=USD')
      .then(response => response.json())
      .then(data => {
        const rate = data.rates[currency];

        if (rate !== undefined) {
          document.querySelector(
            '#result'
          ).innerHTML = `One USD is equal to ${rate.toFixed(3)} ${currency}.`;
        } else {
          document.querySelector('#result').innerHTML = 'Invalid currency.';
        }
      })
      .catch(error => {
        console.log(error);
        document.querySelector('#result').innerHTML =
          'Error fetching exchange rates.';
      });

    // Prevent form from submitting normally
    return false;
  };
});

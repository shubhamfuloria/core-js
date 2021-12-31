// fetch('https://api.giphy.com/v1/gifs/translate?api_key=s0lgqLNeQvPBHXGAm3uANqqfQXaVvfJm&s=',
//   { mode: 'cors' }
// )
//   .then(response => response.json())
//   .then(response => console.log(response));


async function getCats() {
  const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=s0lgqLNeQvPBHXGAm3uANqqfQXaVvfJm&s=', { mode: 'cors' })
  response.json().then(response => console.log(response));
}
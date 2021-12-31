const img = document.querySelector('img');

fetch('https://api.giphy.com/v1/gifs/translate?api_key=s0lgqLNeQvPBHXGAm3uANqqfQXaVvfJm&s=cat',
  { mode: 'cors' }
)
  .then(response => {
    console.log(response)
    return response.json();
  })
  .then(response => {
    img.src = response.data.images.original.url;
  })

const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Print out all the cat names in to catNames variable.

let catNames = [];

fetch(catsAPI)
  .then(response => response.json())
  .then(data => {
    data.forEach(breed => {
      catNames.push(breed.name);
    });
    console.log(catNames);
  })
  .catch(error => console.error(error));

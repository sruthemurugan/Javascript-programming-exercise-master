const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Read the cats api and find the average weight of cat in metric unit.
// Read the countries api and find out the 10 largest countries
// Read the countries api and count total number of languages in the world used as officials.

let totalWeight = 0;
let count = 0;

fetch(catsAPI)
  .then(response => response.json())
  .then(data => {
    data.forEach(breed => {
      if (breed.weight.metric) {
        totalWeight += breed.weight.metric;
        count++;
      }
    });
    const averageWeight = totalWeight / count;
    console.log(`Average weight of cat in metric unit: ${averageWeight} kg`);
  })
  .catch(error => console.error(error));

  fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    const largestCountries = data.sort((a, b) => b.area - a.area).slice(0, 10);
    console.log('10 largest countries:');
    largestCountries.forEach(country => {
      console.log(`${country.name} - ${country.area} km²`);
    });
  })
  .catch(error => console.error(error));

  let languageCount = {};

fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      country.languages.forEach(language => {
        if (!languageCount[language.iso639_1]) {
          languageCount[language.iso639_1] = 1;
        } else {
          languageCount[language.iso639_1]++;
        }
      });
    });
    const totalLanguages = Object.keys(languageCount).length;
    console.log(`Total number of languages in the world used as officials: ${totalLanguages}`);
  })
  .catch(error => console.error(error));
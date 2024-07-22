const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// How many languages are there in the countries object file.

// *** Use the countries data to find the 10 most spoken languages:


//    // Your output should look like this
//    console.log(mostSpokenLanguages(countries, 10))
//    [
//      { English: 91 },
//      { French: 45 },
//      { Arabic: 25 },
//      { Spanish: 24 },
//      { Russian: 9 },
//      { Portuguese: 9 },
//      { Dutch: 8 },
//      { German: 7 },
//      { Chinese: 5 },
//      { Swahili: 4 },
//      { Serbian: 4 }
//    ]

//   // Your output should look like this
//   console.log(mostSpokenLanguages(countries, 3))
//   [
//   {English:91},
//   {French:45},
//   {Arabic:25}
//   ]

const countryLanguages = {
    Finland: ['Finnish', 'Swedish', 'English'],
    Sweden: ['Swedish', 'English'],
    Norway: ['Norwegian', 'English']
  };

  function mostSpokenLanguages(countries, n) {
    const languageCounts = {};
    countries.forEach(country => {
      countryLanguages[country].forEach(language => {
        languageCounts[language] = (languageCounts[language] || 0) + 1;
      });
    });
  
    const sortedLanguages = Object.entries(languageCounts).sort((a, b) => b[1] - a[1]);
    return sortedLanguages.slice(0, n).map(([language, count]) => ({ [language]: count }));
  }
  
  console.log(mostSpokenLanguages(countries, 10));
  
  
  console.log(mostSpokenLanguages(countries, 3));

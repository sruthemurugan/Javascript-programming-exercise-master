const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ecuador",
    "Finland",
    "Germany",
    "Hungary",
    "Iceland",
    "India",
    "Japan",
    "Kenya",
    "Latvia",
    "Mali",
    "Netherlands",
    "Oman",
    "Peru",
    "Qatar",
    "Romania",
    "South Africa",
    "Tanzania",
    "Uganda",
    "Venezuela",
    "Yemen",
    "Zambia",
    "Zimbabwe"
  ];
  
  const container = document.getElementById('container');
  
  countries.forEach((country) => {
    const countryDiv = document.createElement('div');
    countryDiv.className = 'country';
    countryDiv.textContent = country;
    container.appendChild(countryDiv);
  });
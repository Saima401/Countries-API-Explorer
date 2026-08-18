const countriesContainer = document.querySelector(".countries-container");
const SearchInput = document.querySelector(".input");
const suggestion = document.querySelector(".suggestions");

let countries = [];

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    countries = data;

    data.forEach((country) => {
      const countryCard = document.createElement("a");

      countryCard.classList.add("country-card");
      countryCard.href = `./country.html?name=${country.name}`;

      const html = `
        <img src="${country.flags.svg}" alt="flag" />

        <div class="card-text">
          <h3 class="card-title">${country.name}</h3>
          <p><b>Population: </b>${country.population}</p>
          <p><b>Region: </b>${country.region}</p>
          <p><b>Capital: </b>${country.capital?.[0] || "N/A"}</p>
        </div>
      `;

      countryCard.innerHTML = html;
      countriesContainer.append(countryCard);
    });
  });

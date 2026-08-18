const countryName = new URLSearchParams(location.search).get("name");
const countryNameEl = document.querySelector(".country-details h1");
const flagImage = document.querySelector(".flagImage");
const button = document.querySelector(".backBtn");
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    const country = data.find((c) => c.name === countryName);
    if (!country) {
      console.log("no country found");
      return;
    }

    flagImage.src = country.flags.svg;
    countryNameEl.textContent = country.name;

    document.querySelector(".native-name").textContent = country.nativeName;
    document.querySelector(".population").textContent =
      country.population.toLocaleString();
    document.querySelector(".region").textContent = country.region;
    document.querySelector(".capital").textContent = country.capital;
    document.querySelector(".domain").textContent =
      country.topLevelDomain?.join(", ");
    document.querySelector(".currency").textContent =
      country.currencies?.[0]?.name;
    document.querySelector(".language").textContent =
      country.languages?.[0]?.name;
  });

button.addEventListener("click", function () {
  window.location.href = "./index.html";
});

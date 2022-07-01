let searchInput = document.querySelector('#search-input');
let searchButton = document.querySelector('#search-btn');
let result = document.querySelector('.result');
searchButton.onclick = function () {
       let countryName = searchInput.value;
       let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
       getData(url);
};
async function getData(url) {
       try {
              let dataNew = await fetch(url);
              dataNew = await dataNew.json();
              result.innerHTML = `
       <img src=${dataNew[0].flags.svg}>
            <h2>${dataNew[0].name.common}</h2>
            <div class="wrapper">
                <h4>Capital:</h4>
                <span>${dataNew[0].capital.join('')}</span>
            </div>
            <div class="wrapper">
                <h4>Population:</h4>
                <span>${dataNew[0].population}</span>
            </div>
            <div class="wrapper">
                <h4>Area:</h4>
                <span>${dataNew[0].area}</span>
            </div>
            <div class="wrapper">
                <h4>Continents:</h4>
                <span>${dataNew[0].continents.join('')}</span>
            </div>
            <div class="wrapper">
                <h4>Languages:</h4>
                <span>${Object.values(dataNew[0].languages).join(' , ')}</span>
            </div>
            <div class="wrapper">
                <h4>Currencies:</h4>
                <span>${
                       dataNew[0].currencies[Object.keys(dataNew[0].currencies)]
                              .name
                }</span>
            </div>
       `;
       } catch {
              if (searchInput.value == '') {
                     result.innerHTML = `<h3>Input Cannot Be Empty</h3>`;
              } else {
                     result.innerHTML = `<h3>Invalid Country</h3>`;
              }
       }
}

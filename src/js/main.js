const resultsContainer = document.querySelector(".character-cards");

const loadingContainer = document.querySelector("#js-list-container");

const url =
  `https://rickandmortyapi.com/api/character/`;

async function fetchCharacters() {
  try {
      const response = await fetch(url);
      const json = await response.json();

      console.log(json);

      resultsContainer.innerHTML = "";

      const characters = json.results;

      characters.forEach(function (character) {
      resultsContainer.innerHTML += `
      <a href="/details.html?id=${character.id}">
      <div class="card">
        <h2 class="name">${character.name}</h2>
        <h4>Status:${character.status}</h4>
        <h4>Gender:${character.gender}</h4>
        <h4>Species:${character.species}</h4>                                      
        <img src=${character.image}></img>                                                                                                    
      </div>
      <br>
      </a>
      `;
});
} catch (error) {
  console.log(error);
  resultsContainer.innerHTML = ("error", error);
  }
}

fetchCharacters();

setTimeout(function() {
  loadingContainer.innerHTML = "";
}, 3000);
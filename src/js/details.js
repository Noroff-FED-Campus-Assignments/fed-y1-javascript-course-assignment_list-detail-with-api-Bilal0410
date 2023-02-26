/*
============================================
Constants
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L66
============================================
*/

// TODO: Get DOM elements from the DOM

// TODO: Get the query parameter from the URL

// TODO: Get the id from the query parameter

// TODO: Create a new URL with the id @example: https://www.youtube.com/shorts/ps7EkRaRMzs

/*
============================================
DOM manipulation
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L89
============================================
*/

// TODO: Fetch and Render the list to the DOM

// TODO: Create event listeners for the filters and the search

/*
============================================
Data fectching
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L104
============================================
*/

// TODO: Fetch an a single of objects from the API

/*
============================================
Helper functions
============================================
*/

/**
 * TODO: Create a function to create a DOM element.
 * @example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/src/js/detail.js#L36
 * @param {item} item The object with properties from the fetched JSON data.
 */

 const detailContainer = document.querySelector(".character-details");

 const loadingContainer = document.querySelector("#loading-indicator");

 const queryString = document.location.search;
 
 const params = new URLSearchParams(queryString);
 
 const id = params.get("id");
 
 console.log(id);
 
 const url =
 `https://rickandmortyapi.com/api/character/${id}`;
 
 console.log(url);
 
 async function fetchCharacter() {
   try {
     const response = await fetch(url);
     const details = await response.json();
 
     console.log(details);
 
     createHtml(details);
   } catch (error) {
     console.log(error);
     detailContainer.innerHTML = ("error", error);
   }
 }
 
 fetchCharacter();
 
 function createHtml(details) {
   detailContainer.innerHTML = `
   <div class="card-details">
   <h2>${details.id}</h2>
      <h2 class="name">${details.name}</h2>
      <h4>Status:${details.status}</h4>
      <h4>Gender:${details.gender}</h4>
      <h4>Species:${details.species}</h4>                                      
      <img src=${details.image}></img>
      <h4${details.description}></h4>
     <div>
     `;
 }
 
 setTimeout(function() {
  loadingContainer.innerHTML = "";
}, 3000);
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
const recipeSearch = document.getElementById(`recipeSearch`);
let recipesReturned = document.getElementById(`recipesReturned`);

recipeSearch.addEventListener(`submit`, event => {
  event.preventDefault();
  // clearResults();

  const ingredient = document.getElementById("ingredient").value;

  fetch(
    `https://api.spoonacular.com/recipes/search?query=${ingredient}&number=2&apiKey=8dff213c6f504036afb72d6ad4294207`
    /* again, try to keep api keys in a .env file */
  )
    .then(response => response.json())
    .then(({ results }) => {
      console.log(results)
      createRecipeNodes(results);
    });
  });

//     .then(response => {
//       const id = response.results[0].id;
//       const image = response.results[0].image;
//       const title = response.results[0].title;
//       const readyInMinutes = response.results[0].readyInMinutes;
//       const servings = response.results[0].servings;

//       let recipeNode = `
//   <div class="recipe-card" id="recipe-${id}">
//     <img src="https://spoonacular.com/recipeImages/${image}" class="photo" title="Photo of ${title}" />
//       <div class="content">
//           <h2 class="card-text card-title">${title}</h2>
//           <p class="card-text phone">Ready in : ${readyInMinutes}</p>
//           <p class="card-text rating">Servings : ${servings}</p>
//       </div>
//   </div>
// `;
// console.log(response)
// console.log(recipeNode)
//       recipesReturned.innerHTML += recipeNode;
//     });
// });

function createRecipeNodes(results) {
  results.map(recipe => {
    const { id, title, readyInMinutes, servings, image } = recipe;

    /* It would be nice to have a link to spoonacular's recipe page to make this part of the site more 
    user friendly and useful. */
    const recipeNode = `
      <div class="recipe-card" id="recipe-${id}">
        <img src="https://spoonacular.com/recipeImages/${image}" class="photo" title="Photo of ${title}" />
          <div class="content">
              <h2 class="card-text card-title">${title}</h2>
              <p class="card-text phone">Ready in : ${readyInMinutes}</p>
              <p class="card-text rating">Servings : ${servings}</p>
          </div>
      // </div>
`;
    recipesReturned.innerHTML += recipeNode;
  });
}

// function createRecipeNodes(results) {
//   const recipeHTMLs = results.map(( { id, title, readyInMinutes, servings, image }) => {
    
//     return `
//       <div class="recipe-card" id="recipe-${id}">
//         <img src="https://spoonacular.com/recipeImages/${image}" class="photo" title="Photo of ${title}" />
//           <div class="content">
//               <h2 class="card-text card-title">${title}</h2>
//               <p class="card-text phone">Ready in : ${readyInMinutes}</p>
//               <p class="card-text rating">Servings : ${servings}</p>
//           </div>
//       // </div>
// `;
//   });

//   recipesReturned.innerHTML = recipeHTMLs.join('');
// }
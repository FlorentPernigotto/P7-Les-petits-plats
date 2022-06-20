function createCard(object){
  const galleryCardDOM = document.getElementById('recipe_gallery');
  return {
      recipesArray: object.recipes[0].name
  }
}

async function fetchDataRecipe() {

  const recipesFetch = await fetch('data/recipes.json')
    .then(response => response.json())
  const card = createCard(recipesFetch);
  console.log(card);

}

fetchDataRecipe()

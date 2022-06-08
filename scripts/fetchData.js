async function getRecipes() {
    // On récupère les données dans le fichiers JSON //
    const response = await fetch('data/recipes.json');
    if (!response.ok) {
        return "error";
    } else {
        const data = await response.json();
        return {
            recipes: data.recipes,
        };
    }
}
 async function displayData(recipes) {
     const recipesGallery = document.querySelector("#recipe_gallery");

     // Créer un element article avec les données pour chaques photographe
     recipes.foreach((recipe) => {
        const recipeModel = recipeFactory(recipe);
        const recipeCardDOM = recipeModel.
     })
 }

// .then(response => response.json())
// .then(json => console.log(json))
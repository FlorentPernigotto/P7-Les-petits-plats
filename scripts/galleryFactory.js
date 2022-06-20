class recipeCard {
    constructor(recipe) {
        this._recipe = recipe
    }

    const recipesCardDOM = document.getElementById('recipe_gallery')

        recipesCardDOM.innerHTML = `
        <article class="recipe_card">
            <div class="recipe_container_image">

            </div>
            <div class="recipe_container_infos">
                <div class="recipe_title_time">
                    <h2>Limonade de Coco</h2>

                
                    <p><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10.5 5H9V11L14.2 14.2L15 12.9L10.5 10.2V5Z" fill="black"/>
                    </svg> 10 min</p>
                </div>
                <div class="recipe_ingredient_instruction">
                    <div class="recipe_ingredients_container">
                        <p>Lait de coco: 400ml</p>
                        <p>Jus de citron: 2</p>
                        <p>Crème de coco: 4 cuillières</p>
                        <p>Sucre: 20g</p>
                        <p>Glaçons: 2</p>
                    </div>
                    <div class="recipe_instruction_container">
                        <p>Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée</p>
                    </div>
                </div>
            </div>
        </article>`;
}

recipeFactory()


    

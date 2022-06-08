const getRecipeData = async function () {
    let reponse = await fetch('../data/recipes.json')
    let data = await Response.json()
    console.log(data)
}
fetch('data/recipes.json')
  .then(res => res.json())
  .then(data =>console.log(data.recipes))


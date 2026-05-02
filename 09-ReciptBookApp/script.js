const API_KEY = 'd16f6ed097bf4aad85fee27d01283a69';
const recipeListEl = document.querySelector('recipe-list');

function displayRecipes(recipes){

    recipes.forEach( (recipe) =>{
        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item");

        const recipeImageEl = document.createElement("img");
        recipeImageEl.scr = recipe.image;
        recipeImageEl.alt = "recipes image";

        const recipeTitleEl = document.createElement("h2");
        recipeTitleEl.innerText = recipe.title;

        const recipeIngrediensEl = document.createElement("p");
        recipeIngrediensEl.innerHTML = `
        <strong>Ingredients:</strong>${recipe.extendedIngredients}
        .map((ingredients) => ingredients.original).join(", ")};
        `;

        const recipeLinkEl = document.createElement("a");
        recipeLinkEl.href = recipe.sourceUrl;
        recipeLinkEl.innerText = "View Recipe";

        recipeItemEl = appendChild(recipeImageEl);
        recipeItemEl = appendChild(recipeTitleEl);
        recipeItemEl = appendChild(recipeIngrediensEl);
        recipeListEl = appendChild(recipeItemEl);


    });
};

async function getRecipes (){
    const respone = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);

const data = await respone.json();

return data.recipes;
};

async function init(){
    const recipes = await getRecipes();
    displayRecipes(recipes);
};
init();



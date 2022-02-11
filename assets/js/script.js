THEMEALDB_BASE_URL = "https://www.themealdb.com/api/json/v1/1/search.php?";

//navbar hamburger function
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const searchForm = document.getElementById("search-form");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

function renderRecipes(meal) {
  const recipeCard = document.createElement("div");
  recipeCard.setAttribute("class", "recipe-card");
  recipeCard.innerHTML = meal.strMeal;
  return recipeCard;
}

function onSearchSubmit(event) {
  event.preventDefault();
  const searchInput = document.getElementById("search-input").value;
  const url = THEMEALDB_BASE_URL + "s=" + searchInput;
  console.log(url);
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.getElementById("search-container").remove();
      const recipeContainer = document.createElement("div");
      recipeContainer.setAttribute("id", "recipe-container");
      document.getElementById("body").appendChild(recipeContainer);
      console.log(data);
      data.meals.map(function (meal) {
        console.log(meal.strMeal);

        recipeContainer.appendChild(renderRecipes(meal));
      });
    })
    .catch(function (error) {
      console.log(error.message);
    });
}
searchForm.onsubmit = onSearchSubmit;

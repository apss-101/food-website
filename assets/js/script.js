THEMEALDB_BASE_URL = "https://www.themealdb.com/api/json/v1/1/search.php?";

//navbar hamburger function
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];


toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

const searchForm = document.getElementById("search-form");

function onSearchSubmit(event) {
  event.preventDefault();
  const searchInput = document.getElementById("search").value;
  const url = THEMEALDB_BASE_URL + "s=" + searchInput;
  console.log(url);
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error.message);
    });
}
searchForm.onsubmit = onSearchSubmit;

/* new javascript*/
/*
function generateHTML(results) {
  let generatedHTML = "";
  results.map((result) => {
    generatedHTML += `
     <div class="item">
        <img src=`${result.recipe.image}` alt="img">
        <div class="flex-container">
          <h1 class="title">`${result.recipe.label}`</h1>
          <a class="view-btn" target="_blank" href=`${
            result.recipe.url
          }`>View Recipe</a>
        </div>
        <p class="item-data">Calories: `${result.recipe.calories.toFixed(2)}`</p>
        <p class="item-data">Diet label: `${
          result.recipe.dietLabels.length > 0
            ? result.recipe.dietLabels
            : "No Data Found"
        }`</p>
        <p class="item-data">Health labels: `${result.recipe.healthLabels}`</p>
      </div>;`
  });
  searchResultDiv.innerHTML = generatedHTML;
}
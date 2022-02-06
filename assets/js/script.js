THEMEALDB_BASE_URL = "www.themealdb.com/api/json/v1/1/search.php?";

//navbar hamburger function
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const searchForm = document.getElementById("search-form");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

function onSearchSubmit(event) {
  event.preventDefault();
  const searchInput = document.getElementById("search-input");
  const url =
    "www.themealdb.com/api/json/v1/1/search.php?s=" + searchInput.value;
  console.log(url);
  fetch(url, {
    method: "GET",
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error.message);
    });
}
searchForm.onsubmit = onSearchSubmit;

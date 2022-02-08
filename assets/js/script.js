//navbar hamburger function
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});

function onSearchSubmit(event) {
    event.preventDefault();
    const searchInput = document.getElementById("search");
    const url = THEMEALDB_BASE_URL + "s=" + searchInput.value;
    console.log(url);
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
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

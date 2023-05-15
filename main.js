const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

let sentence = "";

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    sentence = searchInput.value;
    window.open(`https://www.google.com/search?q=${sentence}+duolingo`);
})
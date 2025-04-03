document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("search-bar");
    const categories = document.querySelectorAll(".category");

    searchBar.addEventListener("input", function () {
        const searchText = searchBar.value.toLowerCase();
        categories.forEach(category => {
            const title = category.querySelector("h2").innerText.toLowerCase();
            if (title.includes(searchText)) {
                category.style.display = "block";
            } else {
                category.style.display = "none";
            }
        });
    });

    document.getElementById("sort-options").addEventListener("change", function (event) {
        alert("Sorting option selected: " + event.target.value);
    });
});

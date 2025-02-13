document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("explore-ideas-btn").addEventListener("click", function () {
        window.location.href = "invest.html";
    });

    document.getElementById("explore-sectors").addEventListener("click", function () {
        document.querySelector(".sectors").scrollIntoView({ behavior: "smooth" });
    });
});

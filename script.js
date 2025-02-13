document.addEventListener("DOMContentLoaded", function () {
    function navigateTo(page) {
        window.location.href = page;
    }

    document.querySelectorAll(".option-card").forEach(card => {
        card.addEventListener("click", function () {
            const page = this.getAttribute("onclick").split("'")[1];
            navigateTo(page);
        });
    });
});

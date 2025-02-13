// Sidebar Toggle Function
function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

// Close sidebar when clicking outside
document.addEventListener("click", function (event) {
    let sidebar = document.getElementById("sidebar");
    let menuBtn = document.querySelector(".menu-btn");
    if (!sidebar.contains(event.target) && !menuBtn.contains(event.target) && sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");
    }
});

// Redirect 'Get Started' button to Invest page
document.querySelector(".cta-btn").addEventListener("click", () => {
    window.location.href = "invest.html";
});

// Investment Idea Click Alert
document.querySelectorAll(".idea-card").forEach(card => {
    card.addEventListener("click", () => {
        alert(`More details coming soon on: ${card.dataset.name}`);
    });
});

// Form Validation for Upload Page
document.getElementById("uploadForm").addEventListener("submit", function (e) {
    let name = document.getElementById("productName").value.trim();
    let desc = document.getElementById("productDescription").value.trim();
    if (name === "" || desc === "") {
        alert("Please fill in all fields before submitting.");
        e.preventDefault();
    }
});

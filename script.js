// Add event listeners for interactive buttons
document.addEventListener("DOMContentLoaded", function () {
  // Get buttons by their IDs
  const shopBtn = document.getElementById("shopBtn");
  const displayBtn = document.getElementById("displayBtn");
  const investBtn = document.getElementById("investBtn");

  // Hover animation effect
  const addHoverEffect = (button) => {
    button.addEventListener("mouseover", () => {
      button.style.transform = "scale(1.1)";
      button.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.2)";
    });

    button.addEventListener("mouseout", () => {
      button.style.transform = "scale(1)";
      button.style.boxShadow = "none";
    });
  };

  // Add hover effects to all buttons
  [shopBtn, displayBtn, investBtn].forEach(addHoverEffect);

  // Redirect functions with smooth transition
  const redirectWithDelay = (url) => {
    document.body.style.opacity = "0"; // Fade-out effect
    setTimeout(() => {
      window.location.href = url;
    }, 500); // 500ms delay for transition effect
  };

  // Redirects for buttons
  shopBtn.addEventListener("click", () => redirectWithDelay("shop.html"));
  displayBtn.addEventListener("click", () => alert("Display your product feature coming soon!"));
  investBtn.addEventListener("click", () => alert("Investment options launching shortly!"));
});

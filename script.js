
// ===============================
// NestHub JavaScript
// ===============================

// Cart Count
let cartCount = 0;

// Cart Button
const cartButton = document.querySelector(".cart");

if (cartButton) {
    cartButton.addEventListener("click", () => {
        window.location.href = "cart.html";
    });
}

// Search
const searchInput = document.querySelector(".search input");

if (searchInput) {
    searchInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            const value = searchInput.value.trim();

            if (value !== "") {
                alert("Searching for: " + value);
            }
        }
    });
}

// Button Hover Animation
document.querySelectorAll("button").forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });

});

// Mobile Menu
const menu = document.querySelector(".menu");

if (menu) {

    let menuOpen = false;

    menu.addEventListener("click", () => {

        menuOpen = !menuOpen;

        alert(menuOpen ? "Mobile menu opened" : "Mobile menu closed");

    });

}

// Smooth Scroll
const scrollBtn = document.querySelector(".scroll");

if (scrollBtn) {

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top: window.innerHeight,

            behavior: "smooth"

        });

    });

}

// Hero Animation
window.addEventListener("load", () => {

    const heroContent = document.querySelector(".hero-content");
    const heroImage = document.querySelector(".hero-image");

    if (heroContent) heroContent.style.opacity = "1";
    if (heroImage) heroImage.style.opacity = "1";

});

// Add To Cart
document.querySelectorAll(".add-cart").forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        document.querySelector(".cart span").textContent = cartCount;

        button.textContent = "Added ✓";

        setTimeout(() => {

            button.textContent = "Add to Cart";

        }, 1500);

    });

});

// Wishlist
document.querySelectorAll(".wishlist").forEach(btn => {

    btn.addEventListener("click", () => {

        btn.innerHTML = "♥";

    });

});

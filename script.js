// ==========================
// NESTHUB SCRIPT
// ==========================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart badge
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);

    const cartSpan = document.querySelector(".cart span");
    if (cartSpan) {
        cartSpan.textContent = count;
    }
}

updateCartCount();

// Add To Cart
document.querySelectorAll(".add-cart").forEach(button => {

    button.addEventListener("click", function () {

        const card = this.closest(".product-card");

        const product = {
            name: card.querySelector("h3").textContent,
            price: parseInt(card.querySelector(".price").textContent.match(/\d+/)[0]),
            image: card.querySelector("img").src,
            quantity: 1
        };

        const existing = cart.find(item => item.name === product.name);

        if (existing) {
            existing.quantity++;
        } else {
            cart.push(product);
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartCount();

        this.textContent = "Added ✓";

        setTimeout(() => {
            this.textContent = "Add to Cart";
        }, 1000);

    });

});

// Open cart page
const cartButton = document.querySelector(".cart");

if (cartButton) {
    cartButton.addEventListener("click", function () {
        window.location.href = "cart.html";
    });
}

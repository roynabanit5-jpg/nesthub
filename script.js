let cartCount = 0;

document.querySelectorAll(".add-cart").forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".product-card");

        const product = {
            name: card.querySelector("h3").textContent,
            price: parseInt(card.querySelector(".price").textContent.replace(/[^\d]/g, "")),
            image: card.querySelector("img").src,
            quantity: 1
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existing = cart.find(item => item.name === product.name);

        if(existing){
            existing.quantity++;
        }else{
            cart.push(product);
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        document.querySelector(".cart span").textContent = cartCount;

        button.textContent = "Added ✓";

        setTimeout(() => {
            button.textContent = "Add to Cart";
        }, 1000);

    });

});


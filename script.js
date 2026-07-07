
// ==========================
// ADD TO CART
// ==========================

document.querySelectorAll(".add-cart").forEach(button => {

    button.addEventListener("click", function () {

        const card = this.closest(".product-card");

        const name = card.querySelector("h3").innerText;

        const price = Number(
            card.querySelector(".price").innerText
            .replace(/[^\d]/g, "")
        );

        const image = card.querySelector("img").src;

        let cart = JSON.parse(localStorage.getItem("cart"));

        if (!cart) {
            cart = [];
        }

        const index = cart.findIndex(item => item.name === name);

        if (index > -1) {

            cart[index].quantity++;

        } else {

            cart.push({
                name: name,
                price: price,
                image: image,
                quantity: 1
            });

        }

        localStorage.setItem("cart", JSON.stringify(cart));

        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);


                            document.querySelectorAll(".add-cart").forEach(button => {

    button.addEventListener("click", function () {

        const card = this.closest(".product-card");

        const name = card.querySelector("h3").innerText;

        const price = parseInt(card.querySelector(".price").innerText.match(/\d+/)[0]);

        const image = card.querySelector("img").src;

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        let existing = cart.find(item => item.name === name);

        if(existing){
            existing.quantity += 1;
        }else{
            cart.push({
                name:name,
                price:price,
                image:image,
                quantity:1
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        document.querySelector(".cart span").innerText =
        cart.reduce((t,i)=>t+i.quantity,0);

        alert(name + " added to cart!");

    });

});

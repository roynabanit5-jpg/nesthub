// ===== NestHub Cart =====

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const buttons = document.querySelectorAll(".product-card button");
const cartCount = document.getElementById("cart-count");

updateCart();

buttons.forEach(button => {

button.addEventListener("click", () => {

const card = button.parentElement;

const product = {

name: card.querySelector("h3").innerText,

price: card.querySelector("h4").innerText,

image: card.querySelector("img").src

};

cart.push(product);

localStorage.setItem("cart", JSON.stringify(cart));

updateCart();

alert(product.name + " added to cart!");

});

});

function updateCart(){

if(cartCount){

cartCount.innerText = cart.length;

}

}

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
const cartItems = document.getElementById("cart-items");
const total = document.getElementById("total");

if(cartItems){

let amount = 0;

cart.forEach(item => {

cartItems.innerHTML += `
<div class="product-card">
<img src="${item.image}">
<h3>${item.name}</h3>
<h4>${item.price}</h4>
</div>
`;

amount += Number(item.price.replace("₹",""));

});

total.innerHTML = "Total : ₹" + amount;

}

// NestHub Cart

let cartCount = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

button.addEventListener("click", function(){

cartCount++;

alert("Item added to cart ✅");

console.log("Cart Items:", cartCount);

});

});

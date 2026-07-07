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
const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

const email=document.getElementById("email").value;

alert("Welcome back, " + email + "!");

window.location.href="index.html";

});

}

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
// NestHub Search

const searchInput = document.querySelector(".search-box input");
const products = document.querySelectorAll(".product-card");

if(searchInput){

searchInput.addEventListener("keyup",function(){

const value = this.value.toLowerCase();

products.forEach(product=>{

const name = product.querySelector("h3").textContent.toLowerCase();

if(name.includes(value)){
product.style.display="block";
}else{
product.style.display="none";
}

});

});

}

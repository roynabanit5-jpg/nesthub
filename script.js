// NestHub Website JavaScript


// Cart Counter
const cartButton = document.querySelector(".cart");


    window.location.href = "cart.html";
});
});

});



// Search Function

const searchInput = document.querySelector(".search input");

searchInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        let value = searchInput.value.trim();

        if(value !== ""){

            alert("Searching for: " + value);

        }

    }

});




// Buttons Animation

const buttons = document.querySelectorAll("button");


buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="scale(1.05)";

    });


    button.addEventListener("mouseleave",()=>{

        button.style.transform="scale(1)";

    });

});




// Mobile Menu

const menu = document.querySelector(".menu");

let menuOpen=false;


menu.addEventListener("click",()=>{

    menuOpen=!menuOpen;


    if(menuOpen){

        alert("Mobile menu opened");

    }

    else{

        alert("Mobile menu closed");

    }

});




// Smooth Scroll

document.querySelector(".scroll").addEventListener("click",()=>{

    window.scrollTo({

        top:window.innerHeight,

        behavior:"smooth"

    });

});




// Hero Animation On Load

window.addEventListener("load",()=>{


    document.querySelector(".hero-content").style.opacity="1";


    document.querySelector(".hero-image").style.opacity="1";


});
// Product Add To Cart

const addButtons = document.querySelectorAll(".add-cart");

addButtons.forEach(button=>{

button.addEventListener("click",()=>{

cartCount++;

document.querySelector(".cart").innerHTML =
`🛒 Cart <span>${cartCount}</span>`;

button.innerHTML="Added ✓";

setTimeout(()=>{

button.innerHTML="Add to Cart";

},1500);


});


});


// Wishlist

const wishlistButtons=document.querySelectorAll(".wishlist");

wishlistButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

btn.innerHTML="♥";

});

});

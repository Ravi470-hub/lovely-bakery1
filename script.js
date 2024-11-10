let navbar = document.querySelector('.header .navbar');
let menu = document.querySelector('#menu-btn');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let cart = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.add('active');
}

document.querySelector('#close-form').onclick = () =>{
    cart.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    cnteredSlides:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

function submitOrder() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const foodName = document.getElementById("foodName").value;
    const quantity = document.getElementById("quantity").value;
    const address = document.getElementById("address").value;

    if (firstName && lastName && email && phone && foodName && quantity && address) {
        alert(`Order Details:\n
            Name: ${firstName} ${lastName}\n
            Email: ${email}\n
            Phone: ${phone}\n
            Food: ${foodName}\n
            Quantity: ${quantity}\n
            Address: ${address}`);
    } else {
        alert("Please fill out all fields.");
    }
}

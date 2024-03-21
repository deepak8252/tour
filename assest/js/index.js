$(document).ready(function(){
    $('.owl-hero').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        items:1,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});

$(document).ready(function(){
    $('.owl-popular').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        items:3,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});

$(document).ready(function(){
    $('.owl-testi').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        items:1,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});
// Select the bars button and the navigation element
let bars = document.querySelector(".bars");
let nav = document.getElementById("nav");
let header=document.getElementById("header");
// Check if both elements exist
if(bars){
    bars.addEventListener("click",()=>{
        nav.classList.toggle("show");
        
    })
}

window.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    if (header) {
        header.style.position = "sticky";
        header.style.top = "0px";
        header.style.background = "rgb(105,152,171)";
    }
});



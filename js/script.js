// $(document).ready(function(){

function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }

//smooth scrolling

// $('a[href*="#"]').on('click', function (e) {

//         e.preventDefault();

//         $('html, body').animate({

//             scrollTop: $($(this).attr('href')).offset().top,

//         },
//             500,
//             'linear'

//         );

//     });

// });
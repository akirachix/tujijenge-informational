// document.addEventListener('DOMContentLoaded', function () {
//     const navToggle = document.getElementById('nav-toggle');
//     const navLinks = document.getElementById('nav-links');
//     const hamburgerBars = document.querySelector('.hamburger-bars');
//     const hamburgerClose = document.querySelector('.hamburger-close');


//     navToggle.addEventListener('click', function () {
//         navLinks.classList.toggle('open');
//         navToggle.classList.toggle('open');
//         if (navLinks.classList.contains('open')) {
//             hamburgerBars.style.display = 'none';
//             hamburgerClose.style.display = 'block';
//         } else {
//             hamburgerBars.style.display = 'flex';
//             hamburgerClose.style.display = 'none';
//         }
//     });


//     document.querySelectorAll('.links a').forEach(link => {
//         link.addEventListener('click', () => {
//             if (window.innerWidth < 900) {
//                 navLinks.classList.remove('open');
//                 navToggle.classList.remove('open');
//                 hamburgerBars.style.display = 'flex';
//                 hamburgerClose.style.display = 'none';
//             }
//         });
//     });
// });








// const navToggle = document.querySelector(".nav-toggle")
// const links = document.querySelector(".links")
// // const showLinks = document.querySelector("show-links")

// navToggle.addEventListener("click",function(){
//     links.classList.toggle("show-links")
// })

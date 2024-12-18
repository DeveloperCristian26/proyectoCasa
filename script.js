
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

 window.onscroll = () => {
     let header = document.querySelector('header');

     header.classList.toggle('sticky', window.scrollY > 100);
    
     sections.forEach(sec => {
         let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

       if(top >= offset && top < offset + height){

           navLinks.forEach(links =>{
               links.classList.remove('active');
               document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
           })
        }
    });

    

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
 }


var swiper = Swiper(".apartament",{
    effect: "coverflow",
    grabCursor: true,
    centeredSlides:true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate:15,
        strech:0,
        depth:100,
        modifier:1,
        slideShadows: true,

    },

    loop: true,
});

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}






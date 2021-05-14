$(document).ready(function(){
      // swiper
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.arrow-next-1',
     
    },
    // And if we need scrollbar
   breakpoints: {
     320:{
      slidesPerView: 2,
      slidesPerColumn: 2,
     
     },
      480: {
        slidesPerView: 2,
        slidesPerColumn: 1,
      },
      768: {
        
        slidesPerView: 2,
      },
      920: {
        slidesPerView: 3,
      },
      1150: {
       
        slidesPerView: 4,
      }
    }
  });
const swiper2 = new Swiper('.slider-2', {
    // Navigation arrows
    navigation: {
      nextEl: '.arrow-next-2',
    },
    // And if we need scrollbar
   breakpoints: {
     320:{
      slidesPerView: 2,
      },
     768: {
        
        slidesPerView: 3,
      },
      950: {
        slidesPerView: 4,
      },
    }
  });
})
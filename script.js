const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");

const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click());
});


const swiper = new Swiper('.slider-wrapper', {
  
  loop: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    } 
  }

});

function toggleText(dotsId, moreId, btnId) {
  const dots = document.getElementById(dotsId);
  const moreText = document.getElementById(moreId);
  const btnText = document.getElementById(btnId);

  if(moreText.style.display === "none") {
    dots.style.display = "none";
    moreText.style.display = "inline"
    btnText.innerHTML = "Read Less"; 
  } else {
    dots.style.display = "inline";
    moreText.style.display = "none";
    btnText.innerHTML = "Read More";
  }
}
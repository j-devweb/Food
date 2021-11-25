$(function (){

// Слайдер 
$(".top-slider__items").slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
});

// Звездный рейтинг
  $(".star").rateYo({
    rating: 3.6
  });

  // Video popup
  $('.video__popup').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

  // Плавный скролл
  $(".menu a").on("click", function (event) {
		
		event.preventDefault(); 
		let id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});

  // Фильтр карточки товаров
  let mixer = mixitup(".popular__cards");

});



// Search form
let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  menu.classList.remove("active");
  favourites.classList.remove("active");
  cart.classList.remove("active");
  login.classList.remove("active");
};

// Favourites on
let favourites = document.querySelector(".favourites");
document.querySelector("#favourites-btn").onclick = () => {
  favourites.classList.toggle("active");
  menu.classList.remove("active");
  cart.classList.remove("active");
  login.classList.remove("active");
  searchForm.classList.remove("active");
};

// Cart form on
let cart = document.querySelector(".cart");
document.querySelector("#cart-btn").onclick = () => {
  cart.classList.toggle("active");
  menu.classList.remove("active");
  favourites.classList.remove("active");
  login.classList.remove("active");
  searchForm.classList.remove("active");
};

// Login form on
let login = document.querySelector(".login-form");
document.querySelector("#login-btn").onclick = () => {
  login.classList.toggle("active");
  menu.classList.remove("active");
  favourites.classList.remove("active");
  cart.classList.remove("active");
  searchForm.classList.remove("active");
};

// Menu burger
let menu = document.querySelector(".menu");
document.querySelector("#menu-btn").onclick = () => {
  menu.classList.toggle("active");
  favourites.classList.remove("active");
  cart.classList.remove("active");
  login.classList.remove("active");
  searchForm.classList.remove("active");
};


window.onscroll = () => {
  menu.classList.remove("active");
};

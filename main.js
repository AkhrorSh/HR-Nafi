import { createHeader } from "/modules/helpers";
import { navigation_array, social_media_array } from "./modules/db";

let header = document.querySelector("header")

createHeader(header, navigation_array, social_media_array)



const swiper = new Swiper('.swiper', {
	spaceBetween: 10,
	speed: 1000,

	loop: true,
	autoplay: {
		delay: 1200,
		disableOnInteraction: true,
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

const revuesSwiper = new Swiper('.revuesSwiper', {
	slidesPerView: 2,
	spaceBetween: 10,	
	loop: true,
	speed: 500,

	navigation: {
		nextEl: '.next',
		prevEl: '.prev',
	},
});

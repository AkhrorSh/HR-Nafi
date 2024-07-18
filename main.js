import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";

const swiper = new Swiper(".swiper", {
	spaceBetween: 30,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

const swiperTeam = new Swiper(".swiper-team", {
	modules: [Navigation],
	slidesPerView: 5,
	slidesPerGroup: 1,
	spaceBetween: 30,
	breakpoints: {
		320: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
		1440: {
			slidesPerView: 4,
		},
		1920: {
			slidesPerView: 5,
		},
	},
	navigation: {
		prevEl: ".our-team-container .arrow.arrow-left",
		nextEl: ".our-team-container .arrow.arrow-right",
	},
});

const swiperReviews = new Swiper(".swiper-reviews", {
	modules: [Navigation],
	slidesPerView: 3,
	slidesPerGroup: 1,
	spaceBetween: 30,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 2,
		},
		1440: {
			slidesPerView: 3,
		},
		1920: {
			slidesPerView: 3,
		},
	},
	navigation: {
		prevEl: ".reviews-container .arrow.arrow-left",
		nextEl: ".reviews-container .arrow.arrow-right",
	},
});

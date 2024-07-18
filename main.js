import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

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

const swiperLogos = new Swiper(".swiper-logos", {
	slidesPerView: 3,
	slidesPerGroup: 1,
	spaceBetween: 30,
	modules: [Autoplay],
	autoplay: {
		delay: 1000,
	},
	loop: true,

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 1,
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
});


const sidebar = document.querySelector('.sidebar');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const close = document.querySelector('.close');
const open = document.querySelector('.open');

open.onclick = () => {
	open.classList.toggle('active');
	close.classList.toggle('active');
	sidebar.classList.toggle('active');
}
close.onclick = () => {
	close.classList.toggle('active');
	open.classList.toggle('active');
	sidebar.classList.toggle('active');
}
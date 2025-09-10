const teamMembers = [
	{
		name: "Tin",
		photo: "assets/squadfoto's/Jaar 1/Squad1I-Tin.JPG",
		link: "https://thomasseisveld.github.io/profilecard-Thomas/"
	},
	{
		name: "Thomas",
		photo: "assets/squadfoto's/Jaar 1/Squad1I-Thomas.JPG",
		link: "https://thomasseisveld.github.io/profilecard-Thomas/"
	},
	{
		name: "Kate",
		photo: "assets/squadfoto's/Jaar 1/Squad1I-Kate.JPG",
		link: "https://thomasseisveld.github.io/profilecard-Thomas/"
	},
	{
		name: "Emre",
		photo: "assets/squadfoto's/Jaar 1/Squad1I-Emre.JPG",
		link: "https://thomasseisveld.github.io/profilecard-Thomas/"
	},
	{
		name: "Roxy",
		photo: "assets/squadfoto's/Jaar 1/Squad1I-Roxy.JPG",
		link: ""
	},
	{
		name: "Oumaima",
		photo: "assets/squadfoto's/Jaar 1/Squad1I-Roxy.JPG",
		link: "https://meemo99.github.io/your-tribe-profile-card/"
	}
];

const carouselTrack = document.querySelector('.carousel-track');
// const dots = document.querySelectorAll('.dot');
const leftArrow = document.querySelector('.nav-arrow.left');
const rightArrow = document.querySelector('.nav-arrow.right');
let currentIndex = 0;
let isAnimating = false;

function createCard(member, i) {
	const card = document.createElement('div');
	card.className = 'card';
	card.setAttribute('data-index', i);
	card.innerHTML = `
		<img src="${member.photo}" alt="${member.name}">
		<h3 class="member-name">${member.name}</h3>
		<div class="card-preview">
			<iframe src="${member.link}" frameborder="0"></iframe>
			<a class="preview-overlay" href="${member.link}" target="_blank">bezoeken</a>
		</div>
		<a href="${member.link}" class="btn">Meer</a>
	`;
	return card;
}

carouselTrack.innerHTML = '';
const cards = teamMembers.map((member, i) => {
	const card = createCard(member, i);
	carouselTrack.appendChild(card);
	return card;
});

function updateCarousel(newIndex) {
	if (isAnimating) return;
	isAnimating = true;

	currentIndex = (newIndex + cards.length) % cards.length;

	cards.forEach((card, i) => {
		const offset = (i - currentIndex + cards.length) % cards.length;

		card.classList.remove(
			"center",
			"left-1",
			"left-2",
			"right-1",
			"right-2",
			"hidden"
		);

		if (offset === 0) {
			card.classList.add("center");
		} else if (offset === 1) {
			card.classList.add("right-1");
		} else if (offset === 2) {
			card.classList.add("right-2");
		} else if (offset === cards.length - 1) {
			card.classList.add("left-1");
		} else if (offset === cards.length - 2) {
			card.classList.add("left-2");
		} else {
			card.classList.add("hidden");
		}
	});

	// dots.forEach((dot, i) => {
	// 	dot.classList.toggle("active", i === currentIndex);
	// });

	setTimeout(() => {
		isAnimating = false;
	}, 800);
}

leftArrow.addEventListener("click", () => {
	updateCarousel(currentIndex - 1);
});

rightArrow.addEventListener("click", () => {
	updateCarousel(currentIndex + 1);
});

// dots.forEach((dot, i) => {
// 	dot.addEventListener("click", () => {
// 		updateCarousel(i);
// 	});
// });

cards.forEach((card, i) => {
	card.addEventListener("click", () => {
		updateCarousel(i);
	});
});

document.addEventListener("keydown", (e) => {
	if (e.key === "ArrowLeft") {
		updateCarousel(currentIndex - 1);
	} else if (e.key === "ArrowRight") {
		updateCarousel(currentIndex + 1);
	}
});

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
	touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
	touchEndX = e.changedTouches[0].screenX;
	handleSwipe();
});

function handleSwipe() {
	const swipeThreshold = 50;
	const diff = touchStartX - touchEndX;

	if (Math.abs(diff) > swipeThreshold) {
		if (diff > 0) {
			updateCarousel(currentIndex + 1);
		} else {
			updateCarousel(currentIndex - 1);
		}
	}
}

updateCarousel(0);
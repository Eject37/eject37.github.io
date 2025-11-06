// При старте
const base = { c1: "#000000", c2: "#000000", c3: "#000000" };
gsap.fromTo(
	base,
	base,
	{
		c1: 'rgb(20 22 24)',
		c2: 'rgb(25 38 46)',
		c3: 'rgb(20 22 24)',
		duration: 0,
		onUpdate: () => document.body.style.background = `linear-gradient(137deg, ${base.c1}, ${base.c2}, ${base.c3}) center no-repeat fixed`
	}
);

document.querySelector('.program.retube').addEventListener('mouseenter', () => gsap.to(document.body, {
	background: 'linear-gradient(155deg, rgb(25 31 44), rgb(13 24 36), rgb(38 50 66)) center center no-repeat fixed',
	duration: 0.5
}));

document.querySelector('.program.unlocker').addEventListener('mouseenter', () => gsap.to(document.body, {
	background: 'linear-gradient(195deg, rgb(43 31 37), rgb(19 28 36), rgb(43 51 60)) center center no-repeat fixed',
	duration: 0.5
}));

document.querySelector('.program.wintheme').addEventListener('mouseenter', () => gsap.to(document.body, {
	background: 'linear-gradient(224deg, rgb(47 33 40), rgb(23 28 40), rgb(32 37 42)) center center no-repeat fixed',
	duration: 0.5
}));

document.querySelector('.program.translucentsm').addEventListener('mouseenter', () => gsap.to(document.body, {
	background: 'linear-gradient(278deg, rgb(35 26 38), rgb(30 29 39), rgb(29 28 44)) center center no-repeat fixed',
	duration: 0.5
}));

document.querySelector('.program.discordcreator').addEventListener('mouseenter', () => gsap.to(document.body, {
	background: 'linear-gradient(278deg, rgb(20 22 50), rgb(29 37 49), rgb(26 33 42)) center center no-repeat fixed',
	duration: 0.5
}));

document.querySelector('#author > a').addEventListener('mouseenter', () => gsap.to(document.body, {
	background: 'linear-gradient(137deg, rgb(20 22 24), rgb(25 38 46), rgb(20 22 24)) center center no-repeat fixed',
	duration: 0.5
}));

document.querySelectorAll('.payment_number:not(.link, .usdt)').forEach(el => {
	el.onclick = async () => {
		let cardNumber = el.textContent;

		el.style.pointerEvents = 'none';
		el.style.width = el.offsetWidth + 'px';

		navigator.clipboard.writeText(cardNumber.trim().replaceAll(' ', ''));
		el.classList.add('copy-clicked');
		el.textContent = 'Скопировано';
		await new Promise(resolve => setTimeout(resolve, 500));
		el.classList.remove('copy-clicked');
		el.textContent = cardNumber;
		el.style.width = '';
		el.style.pointerEvents = 'auto';
	}
});

// При старте
const base = { c1: "#000000", c2: "#000000", c3: "#000000" };
gsap.fromTo(
	base,
	base,
	{
		c1: 'rgb(47 15 15)',
		c2: 'rgb(22 28 38)',
		c3: 'rgb(60 39 51)',
		duration: 0,
		onUpdate: () => document.body.style.background = `linear-gradient(137deg, ${base.c1}, ${base.c2}, ${base.c3}) center no-repeat fixed`
	}
);

document.querySelector('.program.defenderkiller').addEventListener('mouseenter', () => gsap.to(document.body, {
	background: 'linear-gradient(137deg, rgb(22 31 44), rgb(37 40 46), rgb(35 45 47)) center center no-repeat fixed',
	duration: 0.5
}));

document.querySelector('.program.contexteditor').addEventListener('mouseenter', () => gsap.to(document.body, {
	background: 'linear-gradient(155deg, rgb(37 42 29), rgb(39 39 37), rgb(67 45 33)) center center no-repeat fixed',
	duration: 0.5
}));

document.querySelector('.program.blue-folders').addEventListener('mouseenter', () => gsap.to(document.body, {
	background: 'linear-gradient(278deg, rgb(12 44 67), rgb(38 47 61), rgb(37 58 61)) center center no-repeat fixed',
	duration: 0.5
}));

document.querySelector('.program.discord-server').addEventListener('mouseenter', () => gsap.to(document.body, {
	background: 'linear-gradient(278deg, rgb(20 22 50), rgb(29 37 49), rgb(26 33 42)) center center no-repeat fixed',
	duration: 0.5
}));

document.querySelector('#author > a').addEventListener('mouseenter', () => gsap.to(document.body, {
	background: 'linear-gradient(137deg, rgb(47 15 15), rgb(22 28 38), rgb(60 39 51)) center center no-repeat fixed',
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
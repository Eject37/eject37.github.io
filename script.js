fetch('https://www.comss.ru/page.php?id=5808')
	.then((response) => {
		return response.text();
	})
	.then((data) => {
		const parser = new DOMParser();
		const htmlDocument = parser.parseFromString(data, "text/html");
		const version = htmlDocument.documentElement.querySelector("span[itemprop='softwareVersion']");
		// console.log(version.textContent.split(' ')[0])
		document.querySelector('body').textContent = version.textContent.split(' ')[0];
	});
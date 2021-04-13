function LettersAvatars(selector, options = {}) {

	if (!selector || (!selector.startsWith(".") &&!selector.startsWith("#"))) {
		console.error("No selector defined");
		return;
	}

	const attr = options.hasOwnProperty('attr') && /^data-[\w-]{2,}/s.test(options.attr) ? options.attr : null;

	const color = options.hasOwnProperty("color") &&
		/^#([0-9A-F]{3}){1,2}$/is.test(options.color)
		? options.color
		: null;

	const colorScheme = color
		? null
		: [
			"#3F51B5",
			"#F44336",
			"#FFC107",
			"#E91E63",
			"#673AB7",
			"#4CAF50",
			"#009688",
			"#9C27B0",
			"#CDDC39",
			"#FFEB3B",
			"#FF9800",
			"#FF5722",
			"#795548",
			"#9E9E9E",
			"#2196F3",
			"#607D8B",
		];

	const size = options.hasOwnProperty("size") && !NaN(options.size) ? options.size : null;

	const shadow = options.hasOwnProperty("shadow") && options.shadow;

	const shape = options.hasOwnProperty("shape") &&
		["square", "circle", "rounded-square"].indexOf(options.shape)
		? options.selector
		: "rounded-square";

	function getInitials(text) {

		let initials;
		const textSplit = text ? text.split(' ') : '';
		const textLenght = textSplit.length;

		if ( textLenght > 1 )
			initials = textSplit[0].substring(0, 1) + textSplit[textLenght - 1].substring(0, 1);

		else if ( textLenght === 1 )
			initials = textSplit[0].substring(0, 1);

		else
			return 'NA';

		return initials.toUpperCase();
	}

	function makeImageFromLetters(text = '', sizeElement = 80, color = "#333333") {

		const initials = getInitials(text);
	
		const sizeLetter = parseInt(sizeElement/2);
		const canvas = document.createElement('canvas');
		const context = canvas.getContext('2d');
	
		canvas.width = sizeElement;
		canvas.height = sizeElement;
	
		context.fillStyle = '#FFFFFF';
		context.fillRect(0, 0, sizeElement, sizeElement);
	
		context.fillStyle = `${color}50`;
		context.fillRect(0, 0, sizeElement, sizeElement);
	
		context.fillStyle = color;
		context.textBaseline = 'middle';
		context.textAlign = 'center';
		context.font = `${sizeLetter}px Arial`;
		context.fillText(initials, sizeLetter, sizeLetter + 4);
	
		return canvas.toDataURL()
	}

	if (selector.startsWith("#")) {
		
		const element = document.getElementById(selector.substr(1));
		
		if (element instanceof HTMLImageElement) {
			const text = element.getAttribute(attr || 'data-text-avatar');
			const sizeElement = element.width;
			const colorLetter = color || colorScheme[Math.floor(Math.random() * 16)];
			element.src =  makeImageFromLetters(text, sizeElement, colorLetter);

			if ( !shadow ) {
				element.style.boxShadow = '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)';
			}
		}

	} else if ( selector.startsWith('.')) {

		let elements = document.querySelectorAll(selector);
		
		elements.forEach(element => {

			if (element instanceof HTMLImageElement) {
				const text = element.getAttribute(attr || 'data-text-avatar');
				const sizeElement = element.width;
				const colorLetter = color || colorScheme[Math.floor(Math.random() * 16)];
				element.src = makeImageFromLetters(text, sizeElement, colorLetter);
			}

			if ( !shadow ) {
				element.style.boxShadow = '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)';
			}
		});
	}
}
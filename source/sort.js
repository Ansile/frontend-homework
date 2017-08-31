const compareAlphabetic = (firstString, secondString) => firstString.localeCompare(secondString);
const wordTransformAlphabetic = word => wordTransform(word, compareAlphabetic);

function wordTransform(word,comparator) {
	if (!word) {
		return '';
	}

	return word
		.toLowerCase()
		.split('')
		.sort(comparator)
		.join('')
		.replace(/^./, sym => sym.toUpperCase());
}

function sort(str) {
	if (typeof(str) !== 'string') {
		return '';
	}

	return str
		.split(' ')
		.map(wordTransformAlphabetic)
		.sort(compareAlphabetic)
		.join(' ');
}


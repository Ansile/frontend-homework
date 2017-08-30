function wordTransform(word,comparator) {
	if (!word) {
		return '';
	}
	word = word.toLowerCase().split('').sort(comparator);
	word[0] = word[0].toUpperCase();
	word = word.join('');
	return word;
}

function sort(str) {
	if (typeof(str) != 'string') {
		return '';
	}

	const compareAlphabetic = (firstString, secondString) => firstString.localeCompare(secondString);
	const wordTransformAlphabetic = word => wordTransform(word, compareAlphabetic);

	return str
		.split(' ')
		.map(wordTransformAlphabetic)
		.sort(compareAlphabetic)
		.join(' ');
}


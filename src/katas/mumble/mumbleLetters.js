function mumbleLetters (input) {
  const outputArray = [];
  const letters = input.split('');
  letters.forEach(letter => {
    outputArray.push(letter.toUpperCase());
  });
  return outputArray.join('-');
}

module.exports = mumbleLetters;

const countOccurence = wordMinLength => (acc, curr) => {
  if (curr.length < wordMinLength ) return acc;

  const word = curr.toLowerCase();
  acc[word] = word in acc ? acc[word] + 1 : 1;

  return acc;
};

module.exports = function wordCount(text, wordMinLength = 2) {
  if (typeof text !== "string") throw new TypeError("String is needed");
  
  return text.split( /[^A-zÀ-ú0-9]+/).reduce(countOccurence(wordMinLength), {});
};

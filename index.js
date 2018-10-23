
const reg = /[^A-zÀ-ú0-9]+/;
const WORD_MIN_LENGHT = 2;

const countOccurence = (acc, curr) => {
  if (curr.length < WORD_MIN_LENGHT ) return acc;

  const word = curr.toLowerCase();
  acc[word] = (word in acc ? acc[word] + 1 : 1);
  return acc;
};

module.exports = function wordCount(string) {
  if (typeof string !== "string") throw new TypeError("string is needed");
  
  const words = string.split(reg);
  return words.reduce(countOccurence, {});
};

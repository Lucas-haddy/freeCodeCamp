function confirmEnding(str1, str2) {
  const compare = str1.lastIndexOf(str2) === str1.length - str2.length
  return compare;
}

console.log(confirmEnding("I like beans", "beans"));
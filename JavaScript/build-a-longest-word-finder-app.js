const findLongestWordLength=str=> {
  let word=0;
  for (let i of str.split(/\s+/)) {
    if (i.length>word) {
      word=i.length;
    }
  }
  return word;
}
console.log(findLongestWordLength)


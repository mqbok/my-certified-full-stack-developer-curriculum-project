function arrayDiff(arr1, arr2) {
  let arr1Diff=arr1.filter((str)=> !arr2.includes(str));
	 let arr2Diff=arr2.filter((str)=> !arr1.includes(str));
  return arr1Diff.concat(arr2Diff).sort();
}
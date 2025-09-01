const mutation=arr=> {
  for (let i of arr[1].toLowerCase()) {
    if (!arr[0].toLowerCase().includes(i)) {
      return false;
    }
  }
  return true;
}




let lunches=[];

const addLunchToEnd=(arr,item)=> {
  console.log(`${item} added to the end of the lunch menu.`);
  arr.push(item);
  return arr;
}

const addLunchToStart=(arr,item)=> {
  console.log(`${item} added to the start of the lunch menu.`);
  arr.unshift(item);
  return arr;
}

const removeLastLunch=arr=> {
  if (arr.length==0) {
    console.log("No lunches to remove.");
  }
  else {
    console.log(`${arr[arr.length-1]} removed from the end of the lunch menu.`);
    arr.pop();
    return arr;
  } 
}

const removeFirstLunch=arr=> {
  if (arr.length==0) {
    console.log("No lunches to remove.");
  }
  else {
    console.log(`${arr[0]} removed from the start of the lunch menu.`);
    arr.shift();
    return arr;
  } 
}

const randomNum=(min,max)=> {
  return Math.floor(Math.random() * (max - min)) + min;
}

const getRandomLunch=arr=> {
  if (arr.length==0) {
    console.log("No lunches available.");
  }
  else {
    let choice=randomNum(0,arr.length);
    console.log(`Randomly selected lunch: ${arr[choice]}`);
  }
}

const showLunchMenu=arr=> {
  let [lunch1,lunch2,...rest]=arr;
  if (arr.length==0) {
    console.log("The menu is empty.");
  }
  else {
    console.log(`Menu items: ${[lunch1,lunch2,...rest].join(", ")}`);
  }
}



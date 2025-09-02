let inventory=[]; 
const findProductIndex=name=> {
  for (let i=0;i<inventory.length;i++) {
    if (inventory[i]["name"]==name.toLowerCase()) {
      return i;
    }
  }
  return -1;
}

const addProduct=obj=> {
  obj["name"]=obj["name"].toLowerCase();
  for (let i=0;i<inventory.length;i++) {
    if (obj["name"]==inventory[i]["name"]) {
      inventory[i]["quantity"]+=obj["quantity"];
      console.log(`${inventory[i]["name"]} quantity updated`);
      return;
    }
  }
  inventory.push(obj);
  console.log(`${inventory[inventory.length-1]["name"]} added to inventory`);
}

const removeProduct=(name,quantity)=> {
  name=name.toLowerCase();
  for (let i=0;i<inventory.length;i++) {
    if (inventory[i]["name"]==name) {
      if (inventory[i]["quantity"]==quantity) {
        inventory.splice(i,1);
      }
      else if (inventory[i]["quantity"]<quantity) {
        console.log(`Not enough ${inventory[i]["name"]} available, remaining pieces: ${inventory[i]["quantity"]}`);
      }
      else {
        inventory[i]["quantity"]-=quantity;
        console.log(`Remaining ${inventory[i]["name"]} pieces: ${inventory[i]["quantity"]}`);
      }
      return;
    }
  }
  console.log(`${name} not found`);
}



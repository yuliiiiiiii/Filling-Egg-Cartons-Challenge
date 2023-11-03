const random = function() {
  const prices = [25, 30, 35, 40, 45, 50];
  const index = Math.floor(Math.random() * prices.length);
  return prices[index];
};

function fillEggCartons(numEggs) {
  const objArr = [];
  // YOUR CODE
  if (numEggs < 12) {
    return "Each carton must hold 12 eggs";
  }

  let allEggsArray = [];
  for (let i = 0; i < numEggs; i++) {
    allEggsArray.push(random());
  }

  const fullCartons = Math.floor(numEggs / 12);
  for (let j = 0; j < fullCartons; j++) {
    let acc = { eggs: [], price: 0 };
    // acc.eggs = allEggsArray.slice(i * 12, (i + 1) * 12);

    acc.eggs = allEggsArray.splice(0, 12);
    //get the first 12 items from allEggsArray and add them to the new array, and remove the first 12 items from the allEggsArray
    acc.price = acc.eggs.reduce((sum, curr) => sum += curr);
    objArr.push(acc);
  }

//  return objArr.sort((a, b) => a.price > b.price ? 1 : -1);

  let sortedObjArr = objArr.sort((a, b) => a.price > b.price ? 1 : -1);

  // let cheapestArray = sortedObjArr[0].eggs;
  // cheapestArray.includes(25) ? cheapestArray.splice(cheapestArray.indexOf(25), 1, 51) : console.log("No 25-cent egg in the cheapest carton");
  // sortedObjArr[0].eggs = cheapestArray;
  const indexOf25 = sortedObjArr[0].eggs.indexOf(25);
  sortedObjArr[0].eggs[indexOf25] = 51;
  sortedObjArr[0].price = sortedObjArr[0].eggs.reduce((sum, curr) => sum += curr);


  // let expensiveArray = sortedObjArr[(sortedObjArr.length - 1)].eggs;
  // expensiveArray.includes(50) ? expensiveArray.splice(expensiveArray.indexOf(50), 1, 24) : console.log("No 50-cent egg in the most expensive carton");
  // sortedObjArr[(sortedObjArr.length - 1)].eggs = expensiveArray;
  const indexOf50 = sortedObjArr[(sortedObjArr.length - 1)].eggs.indexOf(50);
  sortedObjArr[(sortedObjArr.length - 1)].eggs[indexOf50] = 24;
  sortedObjArr[(sortedObjArr.length - 1)].price = sortedObjArr[(sortedObjArr.length - 1)].eggs.reduce((sum, curr) => sum += curr);

  return sortedObjArr.sort((a, b) =>  a.price > b.price ? 1 : -1);
}

// console.log(fillEggCartons(36));
console.log(fillEggCartons(52));
//  console.log(fillEggCartons(152));




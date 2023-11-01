const random = function() {
  const prices = [25, 30, 35, 40, 45, 50];
  const index = Math.floor(Math.random() * prices.length);
  return prices[index];
}

function fillEggCartons(numEggs) {
  const objArr = [];
  // YOUR CODE
    if (numEggs < 12) {
      return "Egg number must be equal or larger than 12"
    }

    let allEggsArray = [];
    for (let i=0; i<numEggs; i++) {
      allEggsArray.push(random())
    }
    
    const fullCartons = Math.floor(numEggs / 12);
    for (let i=0; i<fullCartons; i++) {
      let acc = {eggs:[], price:0};

      acc.eggs = allEggsArray.slice(i*12, (i+1)*12);
      acc.price = acc.eggs.reduce((sum,curr) => sum+=curr);
      objArr.push(acc);
    }
    
  return objArr.sort((a,b) => a.price - b.price);
}

// console.log(fillEggCartons(36));
console.log(fillEggCartons(52));
// console.log(fillEggCartons(152));




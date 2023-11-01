const random = function() {
  const prices = [25, 30, 35, 40, 45, 50];
  const index = Math.floor(Math.random() * prices.length);
  return prices[index];
}

function fillEggCartons(numEggs) {
  const objArr = [];
  // YOUR CODE
    if (numEggs < 12) {
      return "Each carton must hold 12 eggs"
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
    
    // return objArr.sort((a,b) => a.price - b.price);
// [
// {eggs: Array(12), price: 430},
// {eggs: Array(12), price: 430},
// {eggs: Array(12), price: 435},
// {eggs: Array(12), price: 445},
// {eggs: Array(12), price: 450},
// {eggs: Array(12), price: 455}, 
// {eggs: Array(12), price: 460}, 
// {eggs: Array(12), price: 460},
// {eggs: Array(12), price: 470},
// {eggs: Array(12), price: 480},
// {eggs: Array(12), price: 500},
// {eggs: Array(12), price: 505}
// ]
     let sortedObjArr = objArr.sort((a,b) => a.price - b.price);

     let cheapestArray = sortedObjArr[0].eggs;
     cheapestArray.includes(25) ? cheapestArray.splice(cheapestArray.indexOf(25), 1, 51) : console.log("No 25-cent egg in the cheapest carton") 
     sortedObjArr[0].eggs = cheapestArray;
     
     
     let expensiveArray = sortedObjArr[(sortedObjArr.length - 1)].eggs;
     expensiveArray.includes(50) ? expensiveArray.splice(expensiveArray.indexOf(50),1,24) : console.log("No 50-cent egg in the most expensive carton") 
     sortedObjArr[(sortedObjArr.length - 1)].eggs = expensiveArray;

     
}

// console.log(fillEggCartons(36));
// console.log(fillEggCartons(52));
 console.log(fillEggCartons(152));




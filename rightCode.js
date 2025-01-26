function sumOfElements(list_) {
    let sum = 0;
    list_.forEach(elem => {
      sum += elem;
    });
    return sum;
  }
  
  let numList = [10000, 20000, 30000];
  console.log(sumOfElements(numList));
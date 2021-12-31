function delayDouble(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(2*n),2000);
  })
}

delayDouble(5)
  .then(value1 => {
    console.log(value1);
    return delayDouble(value1);
  })
  .then(value2 => {
    console.log(value2);
    return delayDouble(value2);
  })
  .then(value3 => {
    console.log(value3);
    return delayDouble(value3);
  })
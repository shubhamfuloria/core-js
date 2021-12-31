var list;

function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("OOPS")), 2000);
  })
}
  
  function findPerson(who) {

  let listPromise = getList();

  
  
  listPromise.then(value => {
    const found = value.some(person => person === who)
    console.log(found)
  })
  .catch(err => console.log(err));
}


findPerson('Shubham');
async function fun() {
  let promise = new Promise(resolve => {
    setTimeout(() => resolve('Done!'), 2000);
  })

  let result = await promise;
  console.log(result);
}


fun();
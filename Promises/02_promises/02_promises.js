var completed = false;


var myPromise = new Promise((resolve, reject) => {

  setTimeout(() => {
    if (completed) resolve('Thank god.');
    else reject('oh my god.');
  }, 3000);
});

myPromise.catch(err =>
  console.log("Error was caught: " + err)
);

myPromise.then((result) => console.log(result));


myPromise.finally(() => console.log("myPromise Settled"));

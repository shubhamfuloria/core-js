/*
What are promises ?
A Promise is an object that returns a value which you hope to receive in future but not now.

There are three states of Promise:
-Pending
-Resolved
-Reject

*/

let completed = false;

let learnJs = new Promise(function (resolve, reject) {

  setTimeout(() => {
    if (completed) {
      resolve('I\'ve completed learning Javascript.');
    } else {
      resolve('I\'ve not yet completed learning Javascript.');
    }
  }, 5 * 1000);
})

learnJs.then(
  success => console.log("Promise is resolved."),
  reason => console.log("Rejected.")
);

learnJs.catch(
  reason => console.log(reason)
)


/*
Until 10 seconds, the state of learnJs promise will be pending.
When the callback function of setTimeout function runs after 10 seconds, the state of promise will change to resolved



*/
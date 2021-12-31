const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("I take 1 sec to run"), 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("I take 2 sec to run"), 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("I take 3 sec to run"), 3000);
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("I take 4 sec to run"), 4000);
});


Promise.all([promise1, promise2, promise3, promise4])
  .then(values => console.log(values));
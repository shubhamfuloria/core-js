//making code memory efficient using closure

//here we are creating a huge array of size 10000 each time we need a data from the array
//so If I need to get 100 times data from the array, 100 times huge array will be created and destroyed

function heaveyDuty(index) {
    const bigArray = new Array(10000).fill('Shubham loves Tirtha');
    console.log("Created!");
    console.log(bigArray[index]);
}

heaveyDuty(100);
heaveyDuty(200);
heaveyDuty(1000);


//________________________________________________________________________________________

/*
By using closure we are creating array only once, and returning a function which remembers bigArray as closure property, so we are creating huge array only once. We are making our code much faster here.
*/

function heaveyDuty2() {
    const bigArray = new Array(10000).fill('Shubham loves Tirtha');
    console.log("Created Again!");
    return function (ind) {
        console.log(bigArray[ind]);
    }
}

var getData = heaveyDuty2()

getData(900);
getData(1);
getData(1000);

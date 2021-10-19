let view;
function initialize() {

    let called = false;

    return function () {
        if (called == true) return;
        const view = 'something';
        console.log("View has been set!");
        called = true;
    }
}

// let startOnce = initialize();
// startOnce();
// startOnce();
// startOnce();
// initialize();


//______________________________________________________________________

function initialize2() {

    function ecapsulated() {
        let called = false;
        function set() {
            if (called == false) {
                const view = 'something';
                console.log("View has been set");
                called = true;
            }
        }
        return {
            set : set
        }
    }
    return ecapsulated();
}

let obj = initialize2();
obj.set();
obj.set();
let obj2 = initialize2();
obj2.set();
var makeCounter = function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }

    return {
        increment : function() {
            changeBy(1);
        },
        decrement : function() {
            changeBy(-1);
        },
        value : function() {
            return privateCounter;
        }
    }
};

var counter1 = makeCounter();
var counter2 = makeCounter();


/*
privateCounter and changeBy are private now(remember java private keyword)

these private data can only be accessed by increment, decrement , value.

*/
const user = {
    name: "Shubham",
    active: true,
    cart: [],
    purchases: []
}

const item1 = {
    name: "Realme C3",
    ID: 1020,
    price: 8000
}

const item2 = {
    name: "Dell Laptop",
    ID: 1030,
    price: 10000
}

function addToCart(item) {

    user.cart.push(item);
    console.log("Item Pushed to cart");
}

function purchase(item) {
    var price = item.price;
    var index = user.cart.indexOf(item)
    user.cart.splice(index, 1);

    function calculateTax(price) {
        return price * (3 / 100);
    }
    var finalPrice = price + calculateTax(item.price);
    var finalItem = Object.assign({}, item);
    finalItem.price = finalPrice;

    user.purchases.push(finalItem);
    console.log(`${item.name} purchased successfully at INR ${finalItem.price} including 3% GST`);

}
function purchaseItem(item) {
    addToCart(item);
    console.log("Cart Status: ");
    console.log(user.cart);
    purchase(item);
}

console.log(user);
purchaseItem(item1);
console.log(user)



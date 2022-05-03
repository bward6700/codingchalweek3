let sharePizza = cutPizzaSlices(8);
function cutPizzaSlices(x){
    return function sharePizza(y){
        return `Each person gets ${x/y} slices of pizza.`
    }
}

console.log(sharePizza(4));
console.log(sharePizza(5));
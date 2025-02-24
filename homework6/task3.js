function checkOrder(available, ordered) {
    if (ordered > available) {
        return "Your order is too large, we don’t have enough goods.";
    }
    if (ordered === 0) {
        return "Your order is empty";
    }
    return "Your order is accepted";
}

console.log(checkOrder(100, 150)); 
console.log(checkOrder(50, 0));    
console.log(checkOrder(200, 50));  

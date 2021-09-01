
function checkPayment(payment, priceOfProduct) {
    console.log(`--- Product price ${priceOfProduct} baht, paid ${payment} baht ----`)
    let change = payment - priceOfProduct;
    if (change < 0) {
        return "Not enough money !";
    } else if (change == 0) {
        return "Give enough money :)";
    } else {
        return numOfCash(change);
    }
}
function numOfCash(change) {
    let cash = {
        "500 baht banknote": 0,
        "100 baht banknote": 0,
        "50 baht banknote": 0,
        "20 baht banknote": 0,
        "10 baht coin": 0,
        "5 baht coin": 0,
        "2 baht coin": 0,
        "1 baht coin": 0
    }
    while (change > 0) {
        if (change >= 500) {
            change = change - 500;
            cash['500 baht banknote']++;
        } else if (change >= 100) {
            change = change - 100;
            cash['100 baht banknote']++;
        } else if (change >= 50) {
            change = change - 50;
            cash['50 baht banknote']++;
        } else if (change >= 20) {
            change = change - 20;
            cash['20 baht banknote']++;
        } else if (change >= 10) {
            change = change - 10;
            cash['10 baht coin']++;
        } else if (change >= 5) {
            change = change - 5;
            cash['5 baht coin']++;
        } else if (change >= 2) {
            change = change - 2;
            cash['2 baht coin']++;
        } else {
            change = change - 1;
            cash['1 baht coin']++;
        }
    }
    let buffer="";
    for (let money in cash) {
        if(cash[money] != 0){
        buffer += `${money}, ${cash[money]} piece\n`
    }
       
    }
    return buffer;
}

console.log(checkPayment(2,10))
console.log(checkPayment(10,10));
console.log(checkPayment(2450, 1900));
console.log(checkPayment(1000, 722));
console.log(checkPayment(5000,4899));


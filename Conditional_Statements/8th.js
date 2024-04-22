function calculateDiscount(totalAmount) {
    let discountPercentage;

    switch (true) {
        case (totalAmount <= 100):
            discountPercentage = 0;
            break;
        case (totalAmount <= 500):
            discountPercentage = 10;
            break;
        case (totalAmount <= 1000):
            discountPercentage = 20;
            break;
        default:
            discountPercentage = 30;
            break;
    }

    return discountPercentage;
}

// Example usage:
let purchaseAmount = 900;
let discount = calculateDiscount(purchaseAmount);
console.log("Discount percentage:", discount, "%");

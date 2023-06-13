//UNIT 2 BLOCK 16: DISCOUNT CHAIN
const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
}

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

//Calculate refill total with pricePerRefill x refills
const refillTotal = (int1, int2) => int1 * int2;
const timmyRefill = refillTotal(timmy.pricePerRefill, timmy.refills);
const sarahRefill = refillTotal(sarah.pricePerRefill, sarah.refills);
const rockyRefill = refillTotal(rocky.pricePerRefill, rocky.refills);

//Subscription total calculation
const subscriptionDiscount = (total) => total * .75;

//Coupon discount calculation
const couponDiscount = (total) => total - 10;

//If subscription is true, apply subscription discount
//If coupon is true, apply coupon discount
const grandTotal = (customer) => {
    let total = refillTotal(customer.pricePerRefill, customer.refills);
    if (customer.subscription) {
      total = subscriptionDiscount(total);
    }
    if (customer.coupon) {
      total = couponDiscount(total);
    }
    return total;
  }

//Print "Your grand total is ${finalAmount}." once grand total has been calculated for each customer
const timmyFinal = grandTotal(timmy);
console.log("Timmy => Your grand total is " + timmyFinal);
const sarahFinal = grandTotal(sarah);
console.log("Sarah => Your grand total is " + sarahFinal);
const rockyFinal = grandTotal(rocky);
console.log("Rocky => Your grand total is " + rockyFinal);
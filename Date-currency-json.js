
const currentDate = new Date();
console.log("Current Date and Time:", currentDate);
const usdToEurRate = 0.85; // 1 USD=0.85 EUR
function usdToEur(usdAmount) {
    return usdAmount * usdToEurRate;
}
function eurToUsd(eurAmount) {
    return eurAmount / usdToEurRate;
}
// Example usage
const usdAmount = 100;
const eurAmount = usdToEur(usdAmount);
console.log(`\n${usdAmount} USD is equal to ${eurAmount} EUR.`);

const eurAmount2 = 50;
const usdAmount2 = eurToUsd(eurAmount2);
console.log(`${eurAmount2} EUR is equal to ${usdAmount2} USD.`);
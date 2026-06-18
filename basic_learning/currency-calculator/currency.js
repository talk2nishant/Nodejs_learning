import axios from "axios";
import readline from "readline";

const APIURL = "https://open.er-api.com/v6/latest";

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

const getExchangeCurrency = async (from, to, amount) => {
    try {
        const response = await axios.get(APIURL);
        const rate = response.data.rates;
        if(!rate[to.toUpperCase()]) {
            console.log("Invalid currency code. Please try again.");
            return;
        }
        const convertedAmount = amount * rate[to.toUpperCase()];
        console.log(`${amount} ${from.toUpperCase()} is equal to ${convertedAmount.toFixed(2)} ${to.toUpperCase()}`);
    } catch (error) {
        console.log("error occurred while fetching exchange rates:", error);
    }
}

rl.question("Enter the currency you want to convert from (e.g., USD): ", (from) => {
    rl.question("Enter the currency you want to convert to (e.g., EUR): ", (to) => {
        rl.question("Enter the amount you want to convert: ", (amount) => {
            getExchangeCurrency(from, to, parseFloat(amount));
            rl.close();
        })
    })
})
import axios from "axios";
import readline from "readline"; 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter city name', async(city) => {
    const apiKey = "afa52f7e457308f12db2b0d53afc4d16";
    const api = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`

    try {
        const response = await axios.get(api);

        console.log("api data:", response.data);
    } catch (error) {
        console.log("Error fetching in weather data:", error);
        
    }
})
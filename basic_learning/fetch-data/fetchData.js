// const https = require('https');

// https.get('https://jsonplaceholder.typicode.com/todos/1', (res) => {
//     let data = '';
    
//     res.on('data', (chunk) => {
//         data += chunk;
//     }).on('end', () => {
//         console.log("Data from API: ", data);
//     }).on('error', (err) => {
//         console.log("Error in fetching data from API: ", err);
//     }); 
// })

// import fetch from 'node-fetch';

// const fetchData = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//           const data = await response.json() 
//           console.log("Data from API: ", data);
//     } catch (error) {
//         console.log("Error in fetching data from API: ", error);
        
//     }
// }

// fetchData(); 

import axios from 'axios';

const getDataFromAxios = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log("Data from API: ", response.data);
    } catch (error) {
        console.log("error in fetching data from API: ", error);
    }
}

getDataFromAxios();
// const greet = (name, callback) => {
//     console.log(`Hello, ${name}`);
//     callback();
// }


// const secondCallback = () => {
//     console.log('This is the second callback function');
// } 

// greet('Alice', secondCallback);

const fs = require('fs').promises;

// fs.readFile('input.txt', 'utf-8', (err, data)=> {
//     if (err) return console.log("err in first input file", err);

//     fs.readFile('input copy.txt', 'utf-8', (err, data2) => {
//         if (err) return console.log("err in second input file", err);

//         fs.readFile('input copy 2.txt', 'utf-8', (err, data3) => {
//             if (err) return console.log("err in third input file", err);

//             console.log("Data from first file: ", data);
//             console.log("Data from second file: ", data2);
//             console.log("Data from third file: ", data3);
//         })
//     })
// })

const readFiles = async () => {
    try {
        const data = await fs.readFile('input.txt', 'utf-8');
        const data1 = await fs.readFile('input copy.txt', 'utf-8');
        const data2 = await fs.readFile('input copy 2.txt', 'utf-8');

        console.log("first file data: ", data);
        console.log("second file data: ", data1);
        console.log("third file data: ", data2);
    } catch (error) {
        console.log("err in reading files", error);
        
    }
}

readFiles();
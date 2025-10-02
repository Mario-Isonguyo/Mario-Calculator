// array manupulation
let color = ['red', 'green', 'blue', 'black'];
console.log(color);
console.log(color[1]);
color.push('brown');
console.log(color);
color.shift(0);
console.log(color);

//Object Creation
let book = {
    titie: 'The Rich Also Pray',
    author: "Gabriel Ekwere",
    year: 2023,
    genre: "Spiritual Piece",
};
console.log("Title:", book.titie, "| Author:",book.author);
book.year = 2025;
genre = "Spiritual Piece";
console.log(book);

//Array of objects
let products = [
    {name: "crocs", price: 11000, inStock: true},
    {name: "Television", price: 350000, inStock: false},
    {name: 'Laptop', price: 300000, inStock: true},
];
products[0].inStock = false;
console.log(products);

//function
function calculate(a, b) {
     console.log('Addition:', a + b);
     console.log('Subtract:', a - b);
     console.log('Multiple:', a * b);
     console.log('Division:', a / b);
};
let result = calculate(25, 12);
console.log(result);

// Simple Calculator in Node.js
const readline = require("readline");

const rL = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask for first number
rL.question("Enter first number: ", (num1) => {
    // Ask for second number
    rL.question("Enter second number: ", (num2) => {
        // Ask for operation
        rL.question("Choose operation (add, subtract, multiply, divide): ", (operation) => {
            
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            let result;

            switch (operation.toLowerCase()) {
                case "add":
                    result = num1 + num2;
                    break;
                case "subtract":
                    result = num1 - num2;
                    break;
                case "multiply":
                    result = num1 * num2;
                    break;
                case "divide":
                    if (num2 === 0) {
                        result = "Error: Cannot divide by zero!";
                    } else {
                        result = num1 / num2;
                    }
                    break;
                default:
                    result = "Invalid operation!";
            }

            console.log("Result:", result);
            rL.close();
        });
    });
});

const readline = require('readline');

// Function to calculate the number of iterations to surpass the barrier
function calculateIterations(forward, backward, barrier) {
    let position = 0;
    let iterations = 0;

    while (position < barrier) {
        position += forward;  // Move forward
        iterations++;         // Count this iteration
        if (position >= barrier) {
            break;            // If we've surpassed the barrier, break out of the loop
        }
        position -= backward; // Move backward
    }

    return iterations;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
let numTests = 0;
let currentTest = 0;

// Function to process the input after reading all lines
function processInput() {
    const results = [];
    for (let i = 0; i < numTests; i++) {
        const [forward, backward, barrier] = inputLines[i].split(' ').map(Number);
        const iterations = calculateIterations(forward, backward, barrier);
        results.push(iterations);
    }

    results.forEach(result => console.log(result));
}

rl.on('line', (line) => {
    if (numTests === 0) {
        numTests = parseInt(line.trim(), 10);
    } else {
        inputLines.push(line.trim());
        currentTest++;
        if (currentTest === numTests) {
            rl.close();
        }
    }
});

rl.on('close', () => {
    processInput();
});

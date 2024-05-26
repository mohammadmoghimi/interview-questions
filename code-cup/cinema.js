function maxEmployees(n, k, a) {
    let totalPeople = a.map(friends => friends + 1)
    totalPeople.sort((a, b) => a - b)
let currentSum = 0;
let maxCount = 0;
    for (let people of totalPeople){
        if (currentSum + people <= k){
            currentSum += people;
            maxCount += 1;
        } else {
        break
        }
    }
    return maxCount;
}
function getUserInput(){
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
 });
    rl.question('', (input) => {
    let [n, k] = input.split(' ').map(Number);
        rl.question('', (input) => {
            let a = input.split(' ').map(Number);
            let result = maxEmployees(n, k, a);
            console.log(result);
            rl.close();
        });
    });
}
getUserInput();

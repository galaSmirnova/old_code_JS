let result = [];
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        result.push(i);
    }    
}
console.log(result);
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}


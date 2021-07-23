for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    let sum = Number(str[0]) + Number(str[1]);
    if (sum == 5) {
        console.log(str);
    }
}
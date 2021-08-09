function chekSums(num1, num2) {
    num1 = prompt('Введите первое трехзначное число');
    num1 = prompt('Введите второе трехзначное число');
    if (getSumDigits(num1) == getSumDigits(num2)) {
        alert('суммы цифр совпадают');
    } else {
        alert('суммы цифр не совпадают');
    }
}
function getSumDigits(num) {
    let sum = 0;
    let digits = String(num).split('');
    for (let digit of digits) {
        sum += Number(digit);
    }
    return sum;
}
console.log(chekSums(234, 531));

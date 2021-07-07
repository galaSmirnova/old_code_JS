let num = 5;
let sum;
if (num >= 10 && num <= 99) {  
   sum = Number(String(num)[0]) + Number(String(num)[1]);
   if (sum <= 9) {
       alert('Сумма цифр однозначна');
   } else {
    alert('Сумма цифр двузначна');
   }
} else {
    alert('Это число меньше 10 или больше 99');
}
    
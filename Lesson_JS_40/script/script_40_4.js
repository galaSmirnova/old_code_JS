let arr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
let month = 10;
for (let i = 0; i < arr.length; i++) {
    if (i == month-1) {
        document.write('<i>' + arr[i] + '</i>' + '<br>');
    } else {
        document.write(arr[i] + '<br>');
    }
}
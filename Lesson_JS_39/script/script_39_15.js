let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let day = 'Вторник';
for(let i=0; i<arr.length; i++) {
    if (arr[i] == day) {
        document.write('<p>'+ '<i>' + arr[i] + '</i>' + '</p>');
    } else {
        document.write('<p>'+ arr[i] +'</p>');        
    }
}

let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for(let i=0; i<arr.length; i++) {
    if (arr[i] == 'Суббота' || arr[i] == 'Воскресенье') {
        document.write('<p>'+ '<strong>' +arr[i] + '</strong>' + '</p>');
    } else {
        document.write('<p>'+ arr[i] +'</p>');        
    }
}

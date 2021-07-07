let day = 31;
if (day >= 1 && day <=10) {
    alert('Первая декада');
} else if (day > 10 && day <= 20) {
    alert('Вторая декада');
} else if (day > 20 && day <= 31) {
    alert('Третья декада');
} else {
    alert('Введите число от 1 до 31');
}
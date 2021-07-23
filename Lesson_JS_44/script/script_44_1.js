let arr = [2, 5, 6, 0, 9, 7];
for (let elem of arr) {
    if (elem == 0) {
        break;
    } else {
        console.log(elem);
    }
}
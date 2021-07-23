let str = '';
for (let i = 1; i <= 3; i++) {
    let strI = String(i);
    for (let j = 1; j <= 3; j++) {
        let strJ = String(j);
        str += strI + strJ + ' ';
    }
}
console.log(str);
let arr = [];
let str ='';
for (let i = 1; i <= 5; i++) {
    let str = '';
    for(let j = 1; j <= 5; j++) {
        str += i;
    }
    arr.push(str);    
}
console.log(arr);
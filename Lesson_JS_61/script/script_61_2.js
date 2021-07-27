let one = 0,
two = 1,
three = 2;
for (let i = 1; i <= 10; i++) {
    let current = one + two + three;
    one = two;
    two = three;
    three = current;    
    console.log(current);
}

let str = 'word1 word2 word3';
let words = str.split(' ');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
}
let result = words.join(' ');
console.log(result);
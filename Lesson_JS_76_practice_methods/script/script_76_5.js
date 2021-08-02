let str = 'html_css_java';
let words = str.split('_');
for (let  i = 0; i < words.length; i++) {
    words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
}
let result = words.join('');
console.log(result);
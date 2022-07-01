const fs = require('fs');

console.log('시작');
fs.readFile('C:\Users\saeyo\OneDrive\바탕 화면\대마 상점\day 0621\readme2.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('1번', data.toString());
});
fs.readFile('C:\Users\saeyo\OneDrive\바탕 화면\대마 상점\day 0621\readme2.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('2번', data.toString());
});
fs.readFile('C:\Users\saeyo\OneDrive\바탕 화면\대마 상점\day 0621\readme2.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('3번', data.toString());
});
console.log('끝');
const fs = require('fs');

const writeStream = fs.createReadStream('./writeme2.txt');
writeStream.on('finish', () => {
    console.log('파일 쓰기');
});

writeStream.write('이 글을 씁니다.\n');
writeStream.write('한번 더 씁니다.');
writeStream.end();
const fs = require('fs').promises;

then(() => {
    return fs.readFile('./writeme.txt');
})
.then((data) => {
    console.log(data.toString());
})
.catch((err) => {
    console.error(err);
});
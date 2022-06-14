import crypto from "crypto";

const createPasswordByHash = (password) => {
    return crypto.createHash("sha512").update(password).digest("base64");
};

console.log(createPasswordByHash("1818"));
console.log(createPasswordByHash("1818"));
console.log(createPasswordByHash("1818"));
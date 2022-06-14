import { rejects } from "assert";
import { resolve } from "path";

//암호화 처리하는데 시간이 걸리므로 비동기로 처리
const createSalt = () =>
    new Promise((resolve, reject) => {
        crypto.randomBytes(64, (err, buf) => {
            if (err) reject(err);
            resolve(buf.toString('base64'));
        });
    });
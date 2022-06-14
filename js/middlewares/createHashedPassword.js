import { rejects } from "assert";
import { resolve } from "path";

const createHashedPassword = (plainPassword) =>
    new Promise(async (resolve, reject) => {
        const salt = await createSalt(); //소금을 만들어서 대입
        crypto.pbkdf2(plainPassword, salt, 9999, 64, 'sha512', (err, key) => {
            if (err) reject(err);
            resolve({password : key.toString('base64'), salt});
        });
    });
//최종적으로 암호화된 비밀번호화 / 소금을 반환
//소금도 반환하는 것은 각 유저의 비밀번호를 암호화하는 데 사용된 소금의
//종류가 다르기 때문에 각 유저마다 소금을 갖고 있어야 비교 가능
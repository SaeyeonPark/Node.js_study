const { builtinModules } = require("module");
const { resolve } = require("path");
const { REPL_MODE_SLOPPY } = require("repl");

const createSalt = () => 
    new Promise((resolve, reject) => {
        crypto.randomBytes(64, (err, buf) => {
            if (err) reject(err);
            resolve(buf.toString('base64'));
        });
    });

const createHashedPassword = (plainPassword) =>
    new Promise(async (resolve, reject) => {
        const salt = await createSalt();
        crypto.pbkdf2(plainPassword, salt, 9999, 64, 'sha512', (err, key) => {
            if (err) reject (err);
            resolve({password:key.toString('base64'), salt});
        });
    });

const {password, salt} = await createHashedPassword(req.body.user.password);

await module.user
    .create({
        ...req.body.user,
        password,
        salt,
    })

const makePasswordHashed = (userId, plainPassword) =>
    new Promise(async (resolve, reject) => {
        const salt = await Modules.user
            .findOne({
                attributes: ['salt'],
                raw: true,
                where: {
                    userId,
                },
            })
            .then((result) => result.salt);

        crypto.pbkdf2(plainPassword, salt, 9999, 64, 'sha512', (err, key) => {
            if(err) reject(err);
            resolve(key.toString('base64'));
        });
    });

const {userId, password: plainPassword} = req.body.user;
const password_ = await makePasswordHashed(userId, plainPassword);

const password3 = 'qpmz0192'
const password2 = '2910zmpq'
 
const key = 'gracefulife'
 
const cipher = (password3, key) => {
	const encrypt = crypto.createCipher('des', key) 
	const encryptResult = encrypt.update(password, 'utf8', 'base64') 
		+ encrypt.final('base64');
		
	console.log(encryptResult)
	return encryptResult
}
 
const decipher = (password3, key) => {
	const decode = crypto.createDecipher('des', key)
	const decodeResult = decode.update(password3, 'base64', 'utf8') 
		+ decode.final('utf8')
		
	console.log(decodeResult)
}
 
const encrypt = cipher(password3, key) // dzzmUb9NevZXKjSIZiZbHQ
decipher(encrypt, key) // qpmz0192
const encrypt2 = cipher(password2, key) // vPwzzznk4gezbixB1Fr9wA
decipher(encrypt2, key) // 2910zmpq

const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key2 = 'abcdefghijklmnopqrstuvwxyz123456';
const iv = '1234567890123456';

const cipher_ = crypto.createCipheriv(algorithm, key2, iv);
let result = cipher.update('암호화', 'utf8', 'base64');
result +=cipher.final('base64');
console.log('암호화:', result);

const decipher_ = crypto.createDecipheriv(algorithm, key2, iv);
let result3 = decipher.update(result, 'base64', 'utf8');
result3 += decipher.final('utf8');
console.log('복호화:', result3);
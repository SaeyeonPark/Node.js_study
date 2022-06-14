const { rejects } = require('assert');
const crypto = require('crypto');
const { resolve } = require('path');

const cipher = (password, key) => {
    return new Promise((resolve, reject) => {
        const encrypt = crypto.createCipher('des', key)
        const encryptResult = encrypt.update(password, 'utf8', 'base64')
            + encrypt.final('base64')
        resolve(encryptResult)
    })
}

const decipher = (password, key) => {
    return new Promise((resolve, reject) => {
        const decode = crypto.createCipher('des', key)
        const decodeResult = decode.update(password, 'base64', 'utf8')
            +decode.final('utf8')

        resolve(decodeResult)
    })
}

module.exports = {
    cipher,
    decipher
}
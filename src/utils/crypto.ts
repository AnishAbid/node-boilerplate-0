import * as CryptoJS  from 'crypto-js';
import config from '../config'

export const enCrypt = (data:string) => {
    // Encrypt
     let ciphertext = CryptoJS.AES.encrypt(
        data,
        config.CRYPTO_PRIVATE_KEY
    ).toString();
    return ciphertext;
};

export const denCrypt = (data:string) => {
    // Decrypt
    let bytes = CryptoJS.AES.decrypt(data, config.CRYPTO_PRIVATE_KEY);
    let deCryptedValue = bytes.toString(CryptoJS.enc.Utf8);
    return deCryptedValue;
};

export const newDecrypt = (password:string, key:string) => {
    // Decrypt
    let bytes = CryptoJS.AES.decrypt(password, key);
    let deCryptedValue = bytes.toString(CryptoJS.enc.Utf8);
    return deCryptedValue;
};

export const getEmailHashMD5 = (email:string) => {
    let hash = CryptoJS.MD5(email);
    return hash
}


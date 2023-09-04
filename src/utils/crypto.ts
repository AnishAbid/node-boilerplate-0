import  config  from '../config';
import * as CryptoJS from 'crypto-js';

export const enCrypt = (data: string) => {
  // Encrypt
  const ciphertext = CryptoJS.AES.encrypt(
    data,
    config.CRYPTO_PRIVATE_KEY
  ).toString();
  return ciphertext;
};

export const denCrypt = (data: string) => {
  // Decrypt
  const bytes = CryptoJS.AES.decrypt(data, config.CRYPTO_PRIVATE_KEY);
  const deCryptedValue = bytes.toString(CryptoJS.enc.Utf8);
  return deCryptedValue;
};

export const newDecrypt = (password: string, key: string) => {
  // Decrypt
  const bytes = CryptoJS.AES.decrypt(password, key);
  const deCryptedValue = bytes.toString(CryptoJS.enc.Utf8);
  return deCryptedValue;
};

export const getEmailHashMD5 = (email: string) => {
  const hash = CryptoJS.MD5(email);
  return hash;
};

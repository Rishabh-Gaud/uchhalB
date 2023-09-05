const CryptoJS = require('crypto-js');
export class AesEncryptUtil {
  static privateKey: string; 
  static getAesPrivateKey() {
    if (AesEncryptUtil.privateKey) return AesEncryptUtil.privateKey;
    AesEncryptUtil.privateKey = process.env.AesPrivateKey;
    return AesEncryptUtil.privateKey;
  }

  static aesEncrypt(data: any) {
    try {
      let pKey = AesEncryptUtil.getAesPrivateKey();
      const ciphertext = CryptoJS.AES.encrypt(
        JSON.stringify(data),
        pKey,
      ).toString();
      return ciphertext;
    } catch (error) {
      throw error;
    }
  }
}
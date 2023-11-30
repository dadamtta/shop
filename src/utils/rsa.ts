import { pki, util } from "node-forge";

export function encryptBase64EncodedData(base64EncodedpublicKeyPem: string, data: any): string {
    const publicKey = pki.publicKeyFromPem(atob(base64EncodedpublicKeyPem));
    return btoa(publicKey.encrypt(util.encodeUtf8(data), "RSAES-PKCS1-V1_5"));
}

/**
 * const publicKey = pki.publicKeyFromPem(atob(PublicKey01));
 * const encrypted = publicKey.encrypt(forge.util.encodeUtf8("원피스 사실 없다."), "RSAES-PKCS1-V1_5");
 * const privateKey = pki.privateKeyFromPem(atob(PrivateKey01));
 * console.log(btoa(encrypted));
 * console.log(privateKey.decrypt(encrypted, "RSAES-PKCS1-V1_5"));
 * console.log(forge.util.decodeUtf8(privateKey.decrypt(encrypted, "RSAES-PKCS1-V1_5")));
 */
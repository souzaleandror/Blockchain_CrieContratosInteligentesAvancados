const crypto = require('crypto');

const { publicKey, privateKey } = crypto.generateKeyPairSync('ec', {
  namedCurve: 'secp256k1'
})

const message = "Aula 1, video 1.4"

console.log("\n Mensagem Original: ", message);

const hash = crypto.createHash('sha256').update(message).digest();

console.log("\n Hash da Mensagem", hash.toString('hex'), "\n");

const signature = crypto.sign('sha256', hash, privateKey);
console.log("Assinatura: ", signature.toString('hex'), "\n");

const isValid = crypto.verify('sha256', hash, publicKey, signature)

console.log("Assinatura valida?", isValid)
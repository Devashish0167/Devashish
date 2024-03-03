function encrypt() {
  var message = document.getElementById('message').value;
  var key = CryptoJS.enc.Utf8.parse('YourSecretKey123'); // Replace with your secret key
  var encrypted = CryptoJS.AES.encrypt(message, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  document.getElementById('encrypted').value = encrypted.toString();
}

function decrypt() {
  var encryptedMessage = document.getElementById('encrypted').value;
  var key = CryptoJS.enc.Utf8.parse('YourSecretKey123'); // Replace with your secret key
  var decrypted = CryptoJS.AES.decrypt(encryptedMessage, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  document.getElementById('decrypted').value = decrypted.toString(CryptoJS.enc.Utf8);
}

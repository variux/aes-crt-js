var aesjs = require('aes-js');
var crypto = require('crypto');



module.exports =  {

  
  encrypt: function(secret, data) {
    function str2byte(str) {
      uint = new Uint8Array(str.length);
      for (var i = 0, j = str.length; i < j; ++i) {
          uint[i] = str.charCodeAt(i);
      }
      return uint;
    }
    let secret_password = str2byte(crypto.createHash('md5').update(secret, 'utf-8').digest('hex').toUpperCase());
    

    var textBytes = aesjs.utils.utf8.toBytes(data);
    
    var aesCbc = new aesjs.ModeOfOperation.ctr(secret_password);
    var encryptedBytes = aesCbc.encrypt(textBytes);
    var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    return encryptedHex;

  },
  decrypt: function(secret, password) {
    function str2byte(str) {
      uint = new Uint8Array(str.length);
      for (var i = 0, j = str.length; i < j; ++i) {
          uint[i] = str.charCodeAt(i);
      }
      return uint;
    }
    var encryptedBytes = aesjs.utils.hex.toBytes(password);

    let secret_password = crypto.createHash('md5').update(secret, 'utf-8').digest('hex').toUpperCase();

    let secret_password_vector = str2byte(secret_password);


    var aesCtr = new aesjs.ModeOfOperation.ctr(secret_password_vector);
    var decryptedBytes = aesCtr.decrypt(encryptedBytes);
    // Convert our bytes back into text
    var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
    return decryptedText;

  }


}





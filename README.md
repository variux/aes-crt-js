# AES CRT MODULE
A module for working with AES CRT encryption on NODE.JS

Welcome to the module, it's currently under development and there's no actually instructions for it.  
The module is based on [aes-js](https://github.com/ricmoo/aes-js), so if you want to customize the counter and other params, will be better if you use this module.  
The advantage of this module is provides you a way to encrypt data without a really understanding about buffers, arrays, converting string to bytes, etc.  

Currently it only provides **AES CRT** module, this is not the unique posibility with AES, if you want more, remember you have the module that is on top of this one.  
## Usage

```javascript
var aes = require('aes-ctr-js');
aes.encrypt('YourKey', 'DatatoEncrypt');
aes.decrypt('YourKey', 'YourEncryptedData');
```

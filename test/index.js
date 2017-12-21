var should = require('chai').should(),
    aes_js = require('../quickstart'),
    encrypt = aes_js.encrypt,
    decrypt = aes_js.decrypt;

describe('#encrypt', function() {
  it('convert PasswordDelFace ', function() {
    encrypt('holis', 'PasswordDelFace').should.equal('f7f42142961f73581250809129b3e0');
  });

  
});

describe('#decrypt', function() {
  it('Convert encrypted data to PasswordDelFace', function() {
    decrypt('holis', 'f7f42142961f73581250809129b3e0').should.equal('PasswordDelFace');
  });

  
});
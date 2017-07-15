'use strict';

const {macAddress} = require('../src/regexp');

const testMacAddress = s => {
    console.log(s, macAddress.test(s));
};

testMacAddress('');

testMacAddress('00:11:22:33:44:55:66');
testMacAddress('00-11-22-33-44-55-66');

testMacAddress('aa:bb:cc:dd:ee:ff:00');
testMacAddress('aa-bb-cc-dd-ee-ff-00');

testMacAddress('00:11:22:33:44:55');
testMacAddress('00-11-22-33-44-55');

testMacAddress('aa:bb:cc:dd:ee:ff');
testMacAddress('aa-bb-cc-dd-ee-ff');

testMacAddress('0a:1b:2c:3d:4e:5f');
testMacAddress('0a-1b-2c-3d-4e-5f');

testMacAddress('a0:b1:c2:d3:e4:f5');
testMacAddress('a0-b1-c2-d3-e4-f5');

var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":67,"id":4491,"methods":[{"el":35,"sc":2,"sl":33},{"el":42,"sc":2,"sl":40},{"el":49,"sc":2,"sl":47},{"el":66,"sc":2,"sl":52}],"name":"SequenceOfRecipientInfo","sl":26}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":33},{"sl":40}],"name":"Verify that encryption works with certificate public encryption key for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":34},{"sl":41}]},"test_127":{"methods":[{"sl":33},{"sl":52}],"name":"Verify toString","pass":true,"statements":[{"sl":34},{"sl":55},{"sl":56},{"sl":57},{"sl":58},{"sl":60},{"sl":61},{"sl":64},{"sl":65}]},"test_157":{"methods":[{"sl":33},{"sl":40},{"sl":47}],"name":"Verify that SequenceOfRecipientInfo is initialized properly","pass":true,"statements":[{"sl":34},{"sl":41},{"sl":48}]},"test_182":{"methods":[{"sl":33},{"sl":47}],"name":"Verify that fullfillsRequirements verifies all required fields","pass":true,"statements":[{"sl":34},{"sl":48}]},"test_237":{"methods":[{"sl":33}],"name":"Verify that  Ieee1609Dot2Content is correctly encoded for type encryptedData","pass":true,"statements":[{"sl":34}]},"test_25":{"methods":[{"sl":33}],"name":"Verify that constructor and getters are correct and it is correctly encoded","pass":true,"statements":[{"sl":34}]},"test_321":{"methods":[{"sl":33},{"sl":40}],"name":"Verify that encryption works with RekReceipient for alg: ecdsaNistP256","pass":true,"statements":[{"sl":34},{"sl":41}]},"test_344":{"methods":[{"sl":33},{"sl":47},{"sl":52}],"name":"Verify toString","pass":true,"statements":[{"sl":34},{"sl":48},{"sl":55},{"sl":56},{"sl":57},{"sl":58},{"sl":60},{"sl":61},{"sl":64},{"sl":65}]},"test_352":{"methods":[{"sl":33}],"name":"Verify that IllegalArgumentException is thrown when encoding if not all fields are set","pass":true,"statements":[{"sl":34}]},"test_354":{"methods":[{"sl":33},{"sl":40}],"name":"Verify that symmetric key envelope encryption works correctly","pass":true,"statements":[{"sl":34},{"sl":41}]},"test_367":{"methods":[{"sl":33},{"sl":40}],"name":"Verify that signAndEncryptData and decryptAndVerifySignedData generates encrypted and signed data structures for alg: ecdsaNistP256","pass":true,"statements":[{"sl":34},{"sl":41}]},"test_378":{"methods":[{"sl":33},{"sl":40}],"name":"Verify that preshared key encryption works correctly","pass":true,"statements":[{"sl":34},{"sl":41}]},"test_549":{"methods":[{"sl":33},{"sl":40}],"name":"Verify that encryption works with secured data public encryption key for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":34},{"sl":41}]},"test_57":{"methods":[{"sl":33},{"sl":40}],"name":"Verify that signAndEncryptData and decryptAndVerifySignedData generates encrypted and signed data structures for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":34},{"sl":41}]},"test_815":{"methods":[{"sl":33},{"sl":40}],"name":"Verify that encryption works with secured data public encryption key for alg: ecdsaNistP256","pass":true,"statements":[{"sl":34},{"sl":41}]},"test_825":{"methods":[{"sl":33},{"sl":40}],"name":"Verify that encryption works with RekReceipient for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":34},{"sl":41}]},"test_876":{"methods":[{"sl":33},{"sl":40}],"name":"Verify that encryption works with certificate public encryption key for alg: ecdsaNistP256","pass":true,"statements":[{"sl":34},{"sl":41}]},"test_882":{"methods":[{"sl":33},{"sl":47}],"name":"Verify that fullfillsRequirements verifies all required fields","pass":true,"statements":[{"sl":34},{"sl":48}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [25, 157, 367, 876, 815, 127, 882, 549, 344, 825, 321, 182, 354, 352, 57, 378, 237, 0], [25, 157, 367, 876, 815, 127, 882, 549, 344, 825, 321, 182, 354, 352, 57, 378, 237, 0], [], [], [], [], [], [157, 367, 876, 815, 549, 825, 321, 354, 57, 378, 0], [157, 367, 876, 815, 549, 825, 321, 354, 57, 378, 0], [], [], [], [], [], [157, 882, 344, 182], [157, 882, 344, 182], [], [], [], [127, 344], [], [], [127, 344], [127, 344], [127, 344], [127, 344], [], [127, 344], [127, 344], [], [], [127, 344], [127, 344], [], []]
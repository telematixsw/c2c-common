var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":89,"id":2218,"methods":[{"el":43,"sc":2,"sl":40},{"el":53,"sc":2,"sl":48},{"el":61,"sc":2,"sl":59},{"el":65,"sc":2,"sl":63},{"el":70,"sc":2,"sl":67},{"el":87,"sc":2,"sl":73}],"name":"CountryAndRegions","sl":30}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_202":{"methods":[{"sl":48},{"sl":59},{"sl":63},{"sl":67},{"sl":73}],"name":"Verify toString","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":60},{"sl":64},{"sl":68},{"sl":69},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":81},{"sl":82},{"sl":86}]},"test_429":{"methods":[{"sl":40},{"sl":48},{"sl":59},{"sl":63},{"sl":67}],"name":"Verify that constructor and getters are correct and it is correctly encoded","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":60},{"sl":64},{"sl":68},{"sl":69}]},"test_616":{"methods":[{"sl":40},{"sl":67}],"name":"Verify that reference structure from D.5.2.2 of P1909.2_D12 is parsed and regenerated correctly","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":68},{"sl":69}]},"test_77":{"methods":[{"sl":48},{"sl":67}],"name":"Verify that all fields must be set or IllegalArgumentException is thrown when encoding","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":68},{"sl":69}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [616, 429], [616, 429], [616, 429], [], [], [], [], [], [202, 77, 429], [202, 77, 429], [202, 77, 429], [202, 77, 429], [202, 77, 429], [], [], [], [], [], [], [202, 429], [202, 429], [], [], [202, 429], [202, 429], [], [], [616, 202, 77, 429], [616, 202, 77, 429], [616, 202, 77, 429], [], [], [], [202], [], [202], [202], [202], [202], [202], [], [202], [202], [], [], [], [202], [], [], []]
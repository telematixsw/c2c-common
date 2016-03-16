var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":87,"id":3218,"methods":[{"el":41,"sc":2,"sl":38},{"el":56,"sc":2,"sl":46},{"el":64,"sc":2,"sl":62},{"el":72,"sc":2,"sl":70},{"el":78,"sc":2,"sl":75},{"el":85,"sc":2,"sl":80}],"name":"TwoDLocation","sl":28}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_164":{"methods":[{"sl":38},{"sl":75}],"name":"Verify that constructor and getters are correct and it is correctly encoded","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":76},{"sl":77}]},"test_254":{"methods":[{"sl":38},{"sl":62},{"sl":70},{"sl":75},{"sl":80}],"name":"Verify toString","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":63},{"sl":71},{"sl":76},{"sl":77},{"sl":82},{"sl":83},{"sl":84}]},"test_256":{"methods":[{"sl":62},{"sl":70},{"sl":80}],"name":"Verify toString","pass":true,"statements":[{"sl":63},{"sl":71},{"sl":82},{"sl":83},{"sl":84}]},"test_29":{"methods":[{"sl":46},{"sl":75}],"name":"Verify that IllegalArgumentException is thrown if UNKNOWN is used as latitude or longitude","pass":true,"statements":[{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":52},{"sl":54},{"sl":76},{"sl":77}]},"test_317":{"methods":[{"sl":62},{"sl":70},{"sl":80}],"name":"Verify toString","pass":true,"statements":[{"sl":63},{"sl":71},{"sl":82},{"sl":83},{"sl":84}]},"test_328":{"methods":[{"sl":46},{"sl":75}],"name":"Verify that IllegalArgumentException is thrown when encoding if not all fields are set","pass":true,"statements":[{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":76},{"sl":77}]},"test_346":{"methods":[{"sl":38},{"sl":75}],"name":"Verify that constructor and getters are correct and it is correctly encoded","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":76},{"sl":77}]},"test_432":{"methods":[{"sl":38},{"sl":75}],"name":"Verify that SequenceOfRectangularRegion is initialized properly","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":76},{"sl":77}]},"test_49":{"methods":[{"sl":38},{"sl":62},{"sl":70},{"sl":75},{"sl":80}],"name":"Verify toString","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":63},{"sl":71},{"sl":76},{"sl":77},{"sl":82},{"sl":83},{"sl":84}]},"test_616":{"methods":[{"sl":38},{"sl":75}],"name":"Verify that reference structure from D.5.2.2 of P1909.2_D12 is parsed and regenerated correctly","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":76},{"sl":77}]},"test_620":{"methods":[{"sl":46},{"sl":62},{"sl":70},{"sl":75},{"sl":80}],"name":"Verify toString","pass":true,"statements":[{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":52},{"sl":63},{"sl":71},{"sl":76},{"sl":77},{"sl":82},{"sl":83},{"sl":84}]},"test_663":{"methods":[{"sl":38},{"sl":46},{"sl":75}],"name":"Verify that IllegalArgumentException is thrown if poistion is the same","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":52},{"sl":76},{"sl":77}]},"test_706":{"methods":[{"sl":38},{"sl":46},{"sl":62},{"sl":70},{"sl":75}],"name":"Verify that constructor and getters are correct and it is correctly encoded","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":52},{"sl":63},{"sl":71},{"sl":76},{"sl":77}]},"test_718":{"methods":[{"sl":38},{"sl":62},{"sl":70},{"sl":75},{"sl":80}],"name":"Verify toString","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":63},{"sl":71},{"sl":76},{"sl":77},{"sl":82},{"sl":83},{"sl":84}]},"test_755":{"methods":[{"sl":38},{"sl":75}],"name":"Verify that all fields must be set or IllegalArgumentException is thrown when encoding","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":76},{"sl":77}]},"test_768":{"methods":[{"sl":38},{"sl":75}],"name":"Verify that all fields must be set or IllegalArgumentException is thrown when encoding","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":76},{"sl":77}]},"test_941":{"methods":[{"sl":38},{"sl":62},{"sl":70},{"sl":75}],"name":"Verify that PolygonalRegion is initialized properly","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":63},{"sl":71},{"sl":76},{"sl":77}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [432, 164, 663, 768, 706, 718, 755, 616, 346, 941, 49, 254], [432, 164, 663, 768, 706, 718, 755, 616, 346, 941, 49, 254], [432, 164, 663, 768, 706, 718, 755, 616, 346, 941, 49, 254], [], [], [], [], [], [663, 706, 328, 620, 29], [663, 706, 328, 620, 29], [663, 706, 328, 620, 29], [663, 706, 328, 620, 29], [663, 706, 328, 620, 29], [], [663, 706, 620, 29], [], [29], [], [], [], [], [], [], [], [256, 706, 718, 941, 49, 620, 317, 254], [256, 706, 718, 941, 49, 620, 317, 254], [], [], [], [], [], [], [256, 706, 718, 941, 49, 620, 317, 254], [256, 706, 718, 941, 49, 620, 317, 254], [], [], [], [432, 164, 663, 768, 706, 718, 755, 328, 616, 346, 941, 49, 620, 29, 254], [432, 164, 663, 768, 706, 718, 755, 328, 616, 346, 941, 49, 620, 29, 254], [432, 164, 663, 768, 706, 718, 755, 328, 616, 346, 941, 49, 620, 29, 254], [], [], [256, 718, 49, 620, 317, 254], [], [256, 718, 49, 620, 317, 254], [256, 718, 49, 620, 317, 254], [256, 718, 49, 620, 317, 254], [], [], []]
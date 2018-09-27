const restoreIpAddresses = require('./restoreIpAddresses')

test.each([
  [
    '2500525511135',
    [],
  ],
  [
    '25525511135',
    ['255.255.11.135', '255.255.111.35'],
  ],
  [
    '010010',
    ['0.10.0.10', '0.100.1.0'],
  ],
  [
    '1111',
    ['1.1.1.1'],
  ],
  [
    '1010012',
    ['1.0.100.12', '10.10.0.12', '10.100.1.2', '101.0.0.12'],
  ],
  [
    '1223325345',
    ['12.233.253.45', '122.33.253.45'],
  ]
])(
  '%j should be able to restore into %j',
  (a, expected) => {
    expect(restoreIpAddresses(a)).toEqual(expected);
  },
);

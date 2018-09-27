const collectingWater = require('./collectingWater')

test.each([
  [[1,8,6,2,5,4,8,3,7], 19],
  [[4,2,1,2,3,4,7,4,3,0,4], 13],
  [[5,0,1], 1],
  [[0,0], 0],
  [[1,4], 0],
  [[8,2,5,9,1,2,7,5,0,0,0,0,6], 45],
  [[1,5,4,2,3,4,0,3,2], 6],
  [[0,1,0,2,1,0,1,3,2,1,2,1], 6]
])(
  '%j should collect %i units of water',
  (a, expected) => {
    expect(collectingWater(a)).toBe(expected);
  },
);

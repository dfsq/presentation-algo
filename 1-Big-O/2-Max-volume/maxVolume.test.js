const maxVolume = require('./maxVolume')

test.each([
  [[1,8,6,2,5,4,8,3,7], 49],
  [[4,2,1,2,3,4,7,4,3,0,4], 40],
  [[5,0,1], 2],
  [[0,0], 0],
  [[8,2,5,9,1,2,7,5,0,0,0,0,6], 72],
  [[1,5,4,2,3,4,0,3,2], 18],
])(
  'Biggerst volume in %j should be %i',
  (a, expected) => {
    expect(maxVolume(a)).toBe(expected);
  },
);

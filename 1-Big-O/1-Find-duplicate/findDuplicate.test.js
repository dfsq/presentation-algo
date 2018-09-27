const findDuplicate = require('./findDuplicate')

test.each([
  [[3,6,1,2,6,4], 6],
  [[3,1,2,1,4], 1],
  [[1,1,1], 1],
  [[1,2,3,4,8,8,7,8], 8],
  [[2,3,2,4,5], 2]
])(
  '%j should find duplicate %i',
  (a, expected) => {
    expect(findDuplicate(a)).toBe(expected);
  },
);

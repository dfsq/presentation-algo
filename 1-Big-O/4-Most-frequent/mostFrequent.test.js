const mostFrequent = require('./mostFrequent')

test.each([
  [
    [1,1,1,2,2,3], 2, [1,2],
  ],
  [
    [1], 1, [1],
  ],
  [
    [1,2,3,4,5], 4, [1,2,3,4]
  ],
  [
    [3,1,4,4,5,2,6,1], 2, [4,1]
  ],
  [
    [1,1,1,1,1,1,1,1], 5, [1]
  ]
])(
  '%j should find %i most frequent values',
  (a, k, expected) => {
    let result = mostFrequent(a, k)
    if (result) {
      sort(result)
    }
    sort(expected)
    expect(result).toEqual(expected);
  },
);

function sort (nums) {
  return nums.sort((a, b) => a - b)
}

const numberDecodings = require('./numberDecodings')

test.each([
  ['12', 2],
  ['226', 3],
  ['1111', 5],
  ['1234321', 6],
  ['2231313', 12],
  ['149112', 6],
  ['123121123', 39],
])(
  '%j should have %i decodings',
  (a, expected) => {
    expect(numberDecodings(a)).toBe(expected);
  },
);

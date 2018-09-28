/**
 * Time: O(2^n)
 */
function numberDecodings (str) {
  if (str.length > 0 && str[0] === '0') {
    return 0
  }

  if (str.length < 2) {
    return 1
  }

  let count = numberDecodings(str.slice(1))

  if (Number(str.slice(0, 2)) < 27) {
    count += numberDecodings(str.slice(2))
  }

  return count
}

/**
 * Time: O(n)
 * Space: O(n)
 */
function numberDecodings (str) {
  if (str.length > 0 && str[0] === '0') {
    return 0
  }

  if (str.length < 2) {
    return 1
  }

  let memo = new Array(str.length + 1)

  memo[str.length] = 1
  memo[str.length - 1] =  str[str.length - 1] === '0' ? 0 : 1

  for (let i = str.length - 2; i >= 0; i--) {
    if (str[i] === '0') {
      memo[i] = 0
    } else {
      memo[i] = memo[i + 1]

      if (Number(str.slice(i, i + 2)) < 27) {
        memo[i] += memo[i + 2]
      }
    }
  }

  return memo[0]
}

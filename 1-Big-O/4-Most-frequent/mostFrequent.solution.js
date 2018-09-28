/**
 * Time: O(n)
 * Space: O(n)
 */
function mostFrequent (nums, k) {
  let hash = {}
  let result = []
  let freqs = []
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === undefined) {
      hash[nums[i]] = 0
    }

    hash[nums[i]] += 1
  }

  for (let el in hash) {
    let fr = hash[el]

    if (freqs[fr] === undefined) {
      freqs[fr] = []
    }

    freqs[fr].push(el)
  }

  for (let i = freqs.length - 1; i >= 0; i--) {
    if (i in freqs) {
      for (let j = 0; j < freqs[i].length; j++) {
        result.push(Number(freqs[i][j]))
        count += 1

        if (count === k) {
          return result
        }
      }
    }
  }

  return result
}

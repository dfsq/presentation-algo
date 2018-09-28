function restoreIpAddresses (str) {
  return splitHelper(str, 4)
}

function splitHelper (str, n) {
  if (n === 1) {
    if (invalidSegment(str)) {
      return null
    } else {
      return [str]
    }
  }

  const result = []

  for (let i = 1; i < 4 && i < str.length; i++) {
    let front = str.slice(0, i)

    if (invalidSegment(front)) {
      continue
    }

    let split = splitHelper(str.slice(i), n - 1)

    if (!split) {
      continue
    }

    for (let j = 0; j < split.length; j++) {
      result.push(front + '.' + split[j])
    }
  }

  return result
}

function invalidSegment (str) {
  let strNumber = Number(str)

  return strNumber > 255 || (strNumber === 0 && str.length > 1) || (strNumber !== 0 && str[0] === '0')
}

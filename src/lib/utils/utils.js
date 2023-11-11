import katex from "katex"

export const ki = (/** @type {string} */ tex) => {
  return katex.renderToString(tex)
}
export const kd = (/** @type {string} */ tex) => {
  return katex.renderToString(tex, { displayMode: true })
}

export const getSeed = (
  /** @type {number} */ id,
  /** @type {number} */ prime
) => {
  return Math.max(id, prime) % Math.min(id, prime)
}

export class LCRNG {
  constructor(seed) {
    this.seed = seed
    this.a = 16807
    this.m = 2147483647
  }
  getNext(min, max, inc = 1) {
    // https://en.wikipedia.org/wiki/Linear_congruential_generator
    this.seed = (this.a * this.seed) % this.m
    return (this.seed % ((max - min) / inc + 1)) * inc + min
  }
}

export function makeInputInteger(e) {
  // remove any characters that are not digits 0-9
  e.target.value = e.target.value.replace(/[^0-9]/g, "")
}

export const sd = (num, digs, extra = true) => {
  function firstNonZero(n) {
    n = n.toString()
    while (n[0] === "0" || n[0] === "." || n[0] === "-" || n[0] === "+") {
      n = n.slice(1)
    }
    return n[0]
  }
  if (extra) {
    if (firstNonZero(num.toPrecision(digs)) === "1") {
      if (firstNonZero(num.toPrecision(digs + 1)) === "9") {
        num = num.toPrecision(digs) // round to 3 digs, say, to get leading one
        // return Number(num).toPrecision(digs + 1); // round back up to 4 digs
      }
      digs++
    }

    // deal with any scientific notation
    if (Number(num).toPrecision(digs).indexOf("e") !== -1) {
      // let index = num.toPrecision(digs).indexOf('e');

      num = num.toPrecision(digs)
      let exponent = num[num.length - 1]
      return num.slice(0, -3) * 10 ** exponent
    }
  }

  num = Number(num)
  return num.toPrecision(digs)
}

export const writeToLocalStorage = function (key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export const readFromLocalStorage = function (key) {
  var value = localStorage.getItem(key)
  return value && JSON.parse(value)
}

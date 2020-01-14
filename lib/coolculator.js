class Coolculator {
  add(a, b) {
    return a + b;
  }

  multiply(a, b) {
    return a * b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    return a / b;
  }

  highest(a, b) {
    return a > b ? a : b;
  }

  lowest(a, b) {
    return a < b ? a : b;
  }

  double(a) {
    return a * 2;
  }

  square(a) {
    return a ** 2;
  }

  raise(a, b) {
    return a ** b;
  }

  isNegative(a) {
    return a <= 0 ? true : false;
  }

  isPositive(a) {
    return a >= 0 ? true : false;
  }

  isCool(a) {
    let first = a;
    let last = a;

    while(first >= 10) { first /= 10 }

    last = last % 10;

    return Math.floor(first) === Math.floor(last) ? true : false;
  }

  sum(a) {
    let total = 0;

    for (let i = 0; i < a.length; i++) {
      total += a[i];
    }

    return total;
  }

  multiplyArray(a) {
    let total = 1;

    for (let i = 0; i < a.length; i++) {
      total *= a[i];
    }

    return total;
  }

  mean(a) {
    return this.sum(a) / a.length;
  }

  factorial(a) {
    let x = a;
    let y = a;

    while(x > 1) {
      x -= 1;
      y *= x;
    }

    return y;
  }

  random(a) {
    return Math.floor(Math.random() * a);
  }
}

module.exports = Coolculator;
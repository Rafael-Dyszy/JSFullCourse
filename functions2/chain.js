const calc = {
  value: 0,
  sum(n) {
    this.value += n;
    return this;
  },
  minus(n) {
    this.value -= n;
    return this;
  },
  log() {
    console.log(this.value);
    return this;
  },
};

calc.sum(5).sum(4).log().minus(4).minus(1).log().sum(8).log();
